type commit = {
    author: {
        email: string,
        name: string
    },
    distinct: boolean,
    message: string,
    sha: string,
    url: string
}

export type TActivity = {
    repo: string,
    commits: commit[],
    URL: string,
    createdAt: Date
}

