interface BulkActionsProps {
    selectedCount: number;
    onBulkUpdate: (updates: any) => void;
    onBulkDelete: () => void;
    onClearSelection: () => void;
    categories: string[];
}
export declare function BulkActions({ selectedCount, onBulkUpdate, onBulkDelete, onClearSelection, categories, }: BulkActionsProps): import("react/jsx-runtime").JSX.Element | null;
export {};
