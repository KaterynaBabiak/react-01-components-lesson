export const TransactionItem = ({item: {type, amount, currency}}) => {
    return (
        <>
            <>{type}</>
            <>{amount}</>
            <>{currency}</>
        </>
    );
};