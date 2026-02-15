import { useState, useEffect } from 'react';

interface RepoData {
    description: string | null;
    topics: string[];
    stargazers_count: number;
    html_url: string;
    language: string;
}

export function useGithubRepo(repoUrl?: string) {
    const [data, setData] = useState<RepoData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!repoUrl) return;

        // Extract owner and repo from URL (e.g., https://github.com/Sameal11/NoteLock)
        const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) return;

        const [, owner, repo] = match;
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;

        setLoading(true);
        fetch(apiUrl)
            .then(async (res) => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
            })
            .then((data) => {
                setData({
                    description: data.description,
                    topics: data.topics || [],
                    stargazers_count: data.stargazers_count,
                    html_url: data.html_url,
                    language: data.language
                });
                setLoading(false);
            })
            .catch((err) => {
                console.warn(`GitHub API Error for ${repo}:`, err);
                setError(err.message);
                setLoading(false);
            });
    }, [repoUrl]);

    return { data, loading, error };
}
