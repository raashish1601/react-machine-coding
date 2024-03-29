import { useState } from "react";
import FileExplorer from "./FileExplorer";
import useTraverseTree from "../../hooks/useTraverseTree";
import { FILE_EXPLORER_DATA } from "../../constants/constants";

export default function FileExplorerWrapper() {
    const [explorerData, setExplorerData] = useState(FILE_EXPLORER_DATA);

    const { insertNode } = useTraverseTree();

    const handleInsertNode = (folderId, item, isFolder) => {
        const finalTree = insertNode(explorerData, folderId, item, isFolder);
        setExplorerData(finalTree);
    };

    return (
        <div className="App">
            <FileExplorer handleInsertNode={handleInsertNode} explorer={explorerData} />
        </div>
    );
}