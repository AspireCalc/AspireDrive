module.exports = {

"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[project]/lib/actions/file.actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"0060bc9eeac4b2fabc48a683debbc04c7bbbafd7b1":"getTotalSpaceUsed","7f13042a3c947b067b422bdd05a9e5cf0f7c288eb6":"getFiles","7f27fa36a148831f3f0229dc023315967776beaac5":"uploadFile","7f8ef21cd3a0232a770021246c3d05b4cd228c3115":"updatedFileUsers","7fe4dccc9897f74b66268a2bad0e663fd2568ec7b4":"deleteFile","7fec5f51c45b4368764e36dd6830e851df864e8e29":"renameFile"},"",""] */ __turbopack_context__.s({
    "deleteFile": (()=>deleteFile),
    "getFiles": (()=>getFiles),
    "getTotalSpaceUsed": (()=>getTotalSpaceUsed),
    "renameFile": (()=>renameFile),
    "updatedFileUsers": (()=>updatedFileUsers),
    "uploadFile": (()=>uploadFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/appwrite/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$appwrite$2f$dist$2f$inputFile$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/node-appwrite/dist/inputFile.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/appwrite/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$appwrite$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/node-appwrite/dist/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$appwrite$2f$dist$2f$id$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/node-appwrite/dist/id.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$appwrite$2f$dist$2f$query$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/node-appwrite/dist/query.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/user.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
const handleError = (error, message)=>{
    console.log(error, message);
    throw error;
};
const uploadFile = async ({ file, ownerId, accountId, path })=>{
    const { storage, databases } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAdminClient"])();
    try {
        // Step 1: Upload file to Appwrite Storage
        const inputFile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$appwrite$2f$dist$2f$inputFile$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InputFile"].fromBuffer(file, file.name);
        const bucketFile = await storage.createFile(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appwriteConfig"].bucketId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$appwrite$2f$dist$2f$id$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ID"].unique(), inputFile);
        // ✅ Step 2: Get file metadata (for mimeType)
        const metadata = await storage.getFile(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appwriteConfig"].bucketId, bucketFile.$id);
        // Step 3: Create your file document
        const fileDocument = {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFileType"])(bucketFile.name).type,
            name: bucketFile.name,
            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFileUrl"])(bucketFile.$id),
            extension: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFileType"])(bucketFile.name).extension,
            size: bucketFile.sizeOriginal,
            owner: ownerId,
            accountId,
            users: [],
            bucketFileId: bucketFile.$id,
            mimeType: metadata.mimeType
        };
        // Step 4: Create document in DB
        const newFile = await databases.createDocument(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appwriteConfig"].databaseId, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appwriteConfig"].fileCollectionId, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$appwrite$2f$dist$2f$id$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ID"].unique(), fileDocument).catch(async (error)=>{
            await storage.deleteFile(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appwriteConfig"].bucketId, bucketFile.$id);
            handleError(error, "Failed to create file document");
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseStringify"])(newFile);
    } catch (error) {
        handleError(error, "Failed to upload file");
    }
};
const createQueries = (currentUser, types, searchText, sort, limit)=>{
    const queries = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$appwrite$2f$dist$2f$query$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Query"].or([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$appwrite$2f$dist$2f$query$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Query"].equal('owner', [
                currentUser.$id
            ]),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$appwrite$2f$dist$2f$query$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Query"].contains('users', [
                currentUser.email
            ])
        ])
    ];
    if (types.length > 0) queries.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$appwrite$2f$dist$2f$query$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Query"].equal('type', types));
    if (searchText) queries.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$appwrite$2f$dist$2f$query$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Query"].contains('name', searchText));
    if (limit) queries.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$appwrite$2f$dist$2f$query$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Query"].limit(limit));
    if (sort) {
        const [sortBy, orderBy] = sort.split('-');
        queries.push(orderBy === 'asc' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$appwrite$2f$dist$2f$query$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Query"].orderAsc(sortBy) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$appwrite$2f$dist$2f$query$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Query"].orderDesc(sortBy));
    }
    return queries;
};
const getFiles = async ({ types = [], searchText = '', sort = '$createdAt-desc', limit })=>{
    const { databases } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAdminClient"])();
    try {
        const currentUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUser"])();
        if (!currentUser) {
            throw new Error("User not found");
        }
        const queries = createQueries(currentUser, types, searchText, sort, limit);
        const files = await databases.listDocuments(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appwriteConfig"].databaseId, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appwriteConfig"].fileCollectionId, queries);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseStringify"])(files);
    } catch (error) {
        handleError(error, "Failed to get files");
    }
};
const renameFile = async ({ fileId, name, extension, path })=>{
    const { databases } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAdminClient"])();
    try {
        const newName = `${name}.${extension}`;
        const updatedFile = await databases.updateDocument(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appwriteConfig"].databaseId, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appwriteConfig"].fileCollectionId, fileId, {
            name: newName
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseStringify"])(updatedFile);
    } catch (error) {
        handleError(error, "Failed to rename the file");
    }
};
const updatedFileUsers = async ({ fileId, emails, path })=>{
    const { databases } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAdminClient"])();
    try {
        const updatedFile = await databases.updateDocument(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appwriteConfig"].databaseId, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appwriteConfig"].fileCollectionId, fileId, {
            users: emails
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseStringify"])(updatedFile);
    } catch (error) {
        handleError(error, "Failed to update the file users");
    }
};
const deleteFile = async ({ fileId, bucketFileId, path })=>{
    const { databases, storage } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAdminClient"])();
    try {
        const deletedFile = await databases.deleteDocument(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appwriteConfig"].databaseId, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appwriteConfig"].fileCollectionId, fileId);
        if (deletedFile) {
            await storage.deleteFile(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appwriteConfig"].bucketId, bucketFileId);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseStringify"])(deletedFile);
    } catch (error) {
        handleError(error, "Failed to delete the file");
    }
};
async function getTotalSpaceUsed() {
    try {
        const { databases } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSessionClient"])();
        const currentUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUser"])();
        if (!currentUser) throw new Error("User is not authenticated.");
        const files = await databases.listDocuments(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appwriteConfig"].databaseId, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appwriteConfig"].fileCollectionId, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$appwrite$2f$dist$2f$query$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Query"].equal("owner", [
                currentUser.$id
            ])
        ]);
        const totalSpace = {
            image: {
                size: 0,
                latestDate: ""
            },
            document: {
                size: 0,
                latestDate: ""
            },
            video: {
                size: 0,
                latestDate: ""
            },
            audio: {
                size: 0,
                latestDate: ""
            },
            other: {
                size: 0,
                latestDate: ""
            },
            used: 0,
            all: 2 * 1024 * 1024 * 1024 /* 2GB available bucket storage */ 
        };
        files.documents.forEach((file)=>{
            const fileType = file.type;
            totalSpace[fileType].size += file.size;
            totalSpace.used += file.size;
            if (!totalSpace[fileType].latestDate || new Date(file.$updatedAt) > new Date(totalSpace[fileType].latestDate)) {
                totalSpace[fileType].latestDate = file.$updatedAt;
            }
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseStringify"])(totalSpace);
    } catch (error) {
        handleError(error, "Error calculating total space used:, ");
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    uploadFile,
    getFiles,
    renameFile,
    updatedFileUsers,
    deleteFile,
    getTotalSpaceUsed
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(uploadFile, "7f27fa36a148831f3f0229dc023315967776beaac5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getFiles, "7f13042a3c947b067b422bdd05a9e5cf0f7c288eb6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(renameFile, "7fec5f51c45b4368764e36dd6830e851df864e8e29", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updatedFileUsers, "7f8ef21cd3a0232a770021246c3d05b4cd228c3115", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteFile, "7fe4dccc9897f74b66268a2bad0e663fd2568ec7b4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTotalSpaceUsed, "0060bc9eeac4b2fabc48a683debbc04c7bbbafd7b1", null);
}}),
"[project]/.next-internal/server/app/(root)/page/actions.js { ACTIONS_MODULE0 => \"[project]/components/Header.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/actions/user.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/lib/appwrite/index.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/lib/actions/file.actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/user.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/appwrite/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/file.actions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/.next-internal/server/app/(root)/page/actions.js { ACTIONS_MODULE0 => \"[project]/components/Header.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/actions/user.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/lib/appwrite/index.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/lib/actions/file.actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/user.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/appwrite/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/file.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(root)/page/actions.js { ACTIONS_MODULE0 => "[project]/components/Header.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/lib/actions/user.actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/lib/appwrite/index.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/lib/actions/file.actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(root)/page/actions.js { ACTIONS_MODULE0 => \"[project]/components/Header.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/actions/user.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/lib/appwrite/index.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/lib/actions/file.actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "001e2dfa10d3d3b2ca9ad8ad1b2bbb0eb05530746a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"]),
    "0060bc9eeac4b2fabc48a683debbc04c7bbbafd7b1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTotalSpaceUsed"]),
    "7f13042a3c947b067b422bdd05a9e5cf0f7c288eb6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFiles"]),
    "7f27fa36a148831f3f0229dc023315967776beaac5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadFile"]),
    "7f3fcab81e05b108c6f2e065297f5251c297c4265e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAdminClient"]),
    "7f4205ea856f09245687e1f7d1a5143084ee607872": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAccount"]),
    "7f44fedf725f120aee40a56c2cc4c346d2ea9049a4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUser"]),
    "7f804c3073ffaefc869e312bc0c4cc3144bbc2fdc6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOutUser"]),
    "7f8415e7784befb7c1678eb0951049579188b44ce6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifySecret"]),
    "7f8ef21cd3a0232a770021246c3d05b4cd228c3115": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updatedFileUsers"]),
    "7f9f32803a3392a9d4ae9060aef7f5d99b3bac0f17": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signInUser"]),
    "7fa0accb28402a967e922c077dc509347950f3f70b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendEmailOTP"]),
    "7fc1ade0a1736c09e7f6e0007fdbbcca616b747f53": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSessionClient"]),
    "7fe4dccc9897f74b66268a2bad0e663fd2568ec7b4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteFile"]),
    "7fec5f51c45b4368764e36dd6830e851df864e8e29": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renameFile"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/user.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/appwrite/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/file.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(root)/page/actions.js { ACTIONS_MODULE0 => "[project]/components/Header.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/lib/actions/user.actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/lib/appwrite/index.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/lib/actions/file.actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(root)/page/actions.js { ACTIONS_MODULE0 => \"[project]/components/Header.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/actions/user.actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/lib/appwrite/index.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/lib/actions/file.actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "001e2dfa10d3d3b2ca9ad8ad1b2bbb0eb05530746a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["001e2dfa10d3d3b2ca9ad8ad1b2bbb0eb05530746a"]),
    "0060bc9eeac4b2fabc48a683debbc04c7bbbafd7b1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["0060bc9eeac4b2fabc48a683debbc04c7bbbafd7b1"]),
    "7f13042a3c947b067b422bdd05a9e5cf0f7c288eb6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f13042a3c947b067b422bdd05a9e5cf0f7c288eb6"]),
    "7f27fa36a148831f3f0229dc023315967776beaac5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f27fa36a148831f3f0229dc023315967776beaac5"]),
    "7f3fcab81e05b108c6f2e065297f5251c297c4265e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f3fcab81e05b108c6f2e065297f5251c297c4265e"]),
    "7f4205ea856f09245687e1f7d1a5143084ee607872": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f4205ea856f09245687e1f7d1a5143084ee607872"]),
    "7f44fedf725f120aee40a56c2cc4c346d2ea9049a4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f44fedf725f120aee40a56c2cc4c346d2ea9049a4"]),
    "7f804c3073ffaefc869e312bc0c4cc3144bbc2fdc6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f804c3073ffaefc869e312bc0c4cc3144bbc2fdc6"]),
    "7f8415e7784befb7c1678eb0951049579188b44ce6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f8415e7784befb7c1678eb0951049579188b44ce6"]),
    "7f8ef21cd3a0232a770021246c3d05b4cd228c3115": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f8ef21cd3a0232a770021246c3d05b4cd228c3115"]),
    "7f9f32803a3392a9d4ae9060aef7f5d99b3bac0f17": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f9f32803a3392a9d4ae9060aef7f5d99b3bac0f17"]),
    "7fa0accb28402a967e922c077dc509347950f3f70b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fa0accb28402a967e922c077dc509347950f3f70b"]),
    "7fc1ade0a1736c09e7f6e0007fdbbcca616b747f53": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fc1ade0a1736c09e7f6e0007fdbbcca616b747f53"]),
    "7fe4dccc9897f74b66268a2bad0e663fd2568ec7b4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fe4dccc9897f74b66268a2bad0e663fd2568ec7b4"]),
    "7fec5f51c45b4368764e36dd6830e851df864e8e29": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fec5f51c45b4368764e36dd6830e851df864e8e29"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(root)/page/actions.js { ACTIONS_MODULE0 => "[project]/components/Header.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/lib/actions/user.actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/lib/appwrite/index.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/lib/actions/file.actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$user$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$appwrite$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(root)/page/actions.js { ACTIONS_MODULE0 => "[project]/components/Header.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/lib/actions/user.actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/lib/appwrite/index.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/lib/actions/file.actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/(root)/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(root)/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/components/ActionDropdown.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/ActionDropdown.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ActionDropdown.tsx <module evaluation>", "default");
}}),
"[project]/components/ActionDropdown.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/ActionDropdown.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ActionDropdown.tsx", "default");
}}),
"[project]/components/ActionDropdown.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ActionDropdown$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/ActionDropdown.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ActionDropdown$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/ActionDropdown.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ActionDropdown$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/components/Chart.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Chart": (()=>Chart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Chart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Chart() from the server but Chart is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/Chart.tsx <module evaluation>", "Chart");
}}),
"[project]/components/Chart.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Chart": (()=>Chart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Chart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Chart() from the server but Chart is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/Chart.tsx", "Chart");
}}),
"[project]/components/Chart.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chart$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/Chart.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chart$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/Chart.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chart$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/components/ui/separator.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Separator": (()=>Separator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Separator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Separator() from the server but Separator is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/separator.tsx <module evaluation>", "Separator");
}}),
"[project]/components/ui/separator.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Separator": (()=>Separator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Separator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Separator() from the server but Separator is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/separator.tsx", "Separator");
}}),
"[project]/components/ui/separator.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/ui/separator.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/ui/separator.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/components/FormattedDateTime.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
const FormattedDateTime = ({ date, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('body-1 text-light-100 mt-1', className),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDateTime"])(date)
    }, void 0, false, {
        fileName: "[project]/components/FormattedDateTime.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = FormattedDateTime;
}}),
"[project]/components/UploadingThumbnail.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
;
const UploadingThumbnail = ({ type, extension, url = '', imageClassName, className })=>{
    const isImage = type === "image" && extension !== "svg";
    const src = isImage ? url : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFileIcon"])(extension, type);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('uploadingThumbnail', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            src: src,
            alt: "thumbnail",
            width: 512,
            height: 512,
            draggable: false,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('w-auto h-auto', imageClassName)
        }, void 0, false, {
            fileName: "[project]/components/UploadingThumbnail.tsx",
            lineNumber: 18,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/UploadingThumbnail.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = UploadingThumbnail;
}}),
"[project]/app/(root)/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ActionDropdown$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ActionDropdown.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Chart.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/separator.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/file.actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FormattedDateTime$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FormattedDateTime.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadingThumbnail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/UploadingThumbnail.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const Dashboard = async ()=>{
    // Parallel requests
    const [files, totalSpace] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFiles"])({
            types: [],
            limit: 10
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$file$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTotalSpaceUsed"])()
    ]);
    // Get usage summary
    const usageSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUsageSummary"])(totalSpace);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "dashboard-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Chart"], {
                        used: totalSpace.used
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "dashboard-summary-list",
                        children: usageSummary.map((summary)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: summary.url,
                                className: "dashboard-summary-card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    src: summary.icon,
                                                    width: 100,
                                                    height: 100,
                                                    alt: "uploaded image",
                                                    className: "summary-type-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/page.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "summary-type-size",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertFileSize"])(summary.size) || 0
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/page.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/page.tsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "summary-type-title",
                                            children: summary.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Separator"], {
                                            className: "bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/page.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FormattedDateTime$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            date: summary.latestDate,
                                            className: "text-center"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(root)/page.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this)
                            }, summary.title, false, {
                                fileName: "[project]/app/(root)/page.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "dashboard-recent-files",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "recent-file-section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "h3 xl:h2 text-light-100",
                            children: "Recent files uploaded"
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/page.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        files.documents.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "mt-5 flex flex-col gap-5",
                            children: files.documents.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: file.url,
                                    target: "_blank",
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadingThumbnail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            type: file.type,
                                            extension: file.extension,
                                            url: file.url
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/page.tsx",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "recent-file-details",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "recent-file-name",
                                                            children: file.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/page.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FormattedDateTime$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            date: file.$createdAt,
                                                            className: "caption"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(root)/page.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(root)/page.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ActionDropdown$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    file: file
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(root)/page.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(root)/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, file.$id, true, {
                                    fileName: "[project]/app/(root)/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/page.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "empty-list",
                            children: "No files uploaded"
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/page.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(root)/page.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(root)/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(root)/page.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Dashboard;
}}),
"[project]/app/(root)/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(root)/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__9f3ccc11._.js.map