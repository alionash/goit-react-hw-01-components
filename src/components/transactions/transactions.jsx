import PropTypes from 'prop-types';
import { Table, Title, Text } from './transactions.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
    <thead>
    <tr>
        <Title>Type</Title>
        <Title>Amount</Title>
        <Title>Currency</Title>
    </tr>
    </thead>

    <tbody> {items.map(item =>     
    <tr key={ item.id }>
        <Text>{ item.type }</Text>
        <Text>{ item.amount }</Text>
        <Text>{ item.currency }</Text>
    </tr>)}
    
    </tbody>
</Table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired
}