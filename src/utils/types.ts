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

type TActivity = {
    repo: string,
    commits: commit[],
    URL: string,
    createdAt: Date
}

type Project = {
    title: string,
    description: string,
    skills: string[],
    url: string
}
