const updateSearchCount = () => {
    const Database = import.meta.env.VITE_APPWRITE_DATABASE_ID
    const ProjectId = import.meta.env.VITE_APPWRITE_PROJECT_ID
    const collection = import.meta.env.VITE_APPWRITE_COLLECTION_ID

    console.log(Database, ProjectId, collection)
}

export default updateSearchCount
