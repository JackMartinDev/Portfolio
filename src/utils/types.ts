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
    id: string,
    repo: string,
    commits: commit[],
    URL: string,
    createdAt: Date
}

type Project = {
    title: string,
    description: string,
    skills: string[],
    github: string,
    image: string,
    url?: string
}
