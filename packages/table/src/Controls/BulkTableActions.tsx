import React, { useEffect, useState } from 'react';
import { Badge, Button, ButtonDropdown, ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { useTableContext } from '../TableContext';
import { BulkRecordAction } from '../types/BulkRecordAction';
import { IdType, TableInstance } from '../types/ReactTable';

type Props<T> = {
    id?: string;
    disabled?: boolean;
    recordName?: string;
    bulkActions?: BulkRecordAction<T>[];
    color?: string;
    onRecordsSelected?: (records: T[]) => void;
} & React.HTMLAttributes<HTMLElement>;

const BulkTableActions = <T extends IdType>({ id, disabled, color, recordName, bulkActions, onRecordsSelected }: Props<T>): JSX.Element | null => {
    const { instance } = useTableContext();

    const { selectedFlatRows: selectedRows, isAllRowsSelected, toggleAllRowsSelected } = instance as TableInstance<T>;

    const [isSelectionDropdownOpen, setIsSelectionDropdownOpen] = useState<boolean>(false);
    const [numberOfSelectedRows, setNumberOfSelectedRows] = useState<number>(0);
    const [selectionButtonText, setSelectionButtonText] = useState('Select');
    const [isDisabled, setIsDisabled] = useState<boolean>(disabled || false);

    useEffect(() => {
        setNumberOfSelectedRows(selectedRows?.length);
        if (isAllRowsSelected) {
            setSelectionButtonText('Deselect');
        } else {
            setSelectionButtonText('Select');
        }

        if (onRecordsSelected) {
            const records = selectedRows.map((row: { original: T }) => row.original);
            onRecordsSelected(records);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedRows, numberOfSelectedRows]);

    useEffect(() => {
        setIsDisabled(disabled || false);
    }, [disabled]);
    
    const toggleSelectionDropdown = () => setIsSelectionDropdownOpen(!isSelectionDropdownOpen);

    const handleToggleSelectAll = () => {
        if (toggleAllRowsSelected) {
            toggleAllRowsSelected();
        }
    }

    return (
        <ButtonGroup id={id} disabled={isDisabled} className="btn-group">
            <Button
                disabled={disabled}
                onClick={() => { handleToggleSelectAll() }}
                color={color}>
                <Badge>{numberOfSelectedRows}</Badge> {selectionButtonText} All {recordName}
            </Button>
            <ButtonDropdown isOpen={isSelectionDropdownOpen} toggle={toggleSelectionDropdown}>
                <DropdownToggle disabled={numberOfSelectedRows === 0 || disabled} color={color} caret />
                <DropdownMenu color={color}>
                    {bulkActions?.map((action) => {
                        const isVisible = action.isVisible ? action.isVisible() : true;
                        const setProps = () => {
                            if (!action.onClick) {
                                return null;
                            }
                            const clickEvent = action.onClick;
                            return { onClick: () => clickEvent(selectedRows.map(row => row.original)) };
                        }

                        if (isVisible) {
                            return <DropdownItem key={action.displayText} {...setProps()}>{action.displayText}</DropdownItem>
                        }
                        return null;
                    }
                    )}
                </DropdownMenu>
            </ButtonDropdown>
        </ButtonGroup>
    );
}

BulkTableActions.defaultProps = {
    recordName: 'Records'
}

export default BulkTableActions;