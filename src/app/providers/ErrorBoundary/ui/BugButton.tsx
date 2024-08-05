import { FC, useEffect, useState } from 'react';

interface BugButtonProps {
    className?: string;
}
// Компонент для тестирования
export const BugButton: FC<BugButtonProps> = () => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <button
            onClick={onThrow}
            type="button"
        // eslint-disable-next-line i18next/no-literal-string
        >
            throw error
        </button>
    );
};
