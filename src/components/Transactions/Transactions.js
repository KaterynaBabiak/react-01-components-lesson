import { TransactionItem } from "./TransactionItem";

export const Transactions = ({ items }) => {
    // console.log(props.items);
    return (
        <>
            <>
                <>
                    <>
                       <>type</>
                       <>amount</>
                       <>currency</>
                    </>
                </>
                <>
                    {items.map(item => (
                        <li key={item.id}>
                            <TransactionItem item={item} />
                        </li>
                ))}
                </>
            </>
        </>

    )};