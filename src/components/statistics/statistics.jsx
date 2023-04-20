import PropTypes from 'prop-types';
import { StatisticsContainer, Stats, Item, Title, Percentage, Label } from './statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsContainer>
            <Title>{ title }</Title>

            <Stats> {stats.map(stat =>
                <Item key={ stat.id } class="item">
                    <Label>{ stat.label }</Label>
                    <Percentage>{ stat.percentage }%</Percentage>
                </Item>)}
            </Stats>
        </StatisticsContainer>
    )
}    

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
}