import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import { fetchBooks } from '../store/books';
import { PieChart, Pie, Legend, Cell } from 'recharts';
import classes from './Analyse.module.css';
let isinitial = true;
const Analyse = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (isinitial) {
            dispatch(fetchBooks());
            isinitial = false;
        }
    }, [dispatch]);

    const booksItems = useAppSelector((state) => state.book.books);

    const genreArray = booksItems.map((book) => {
        return book.genre;
    });

    const yearArray = booksItems.map((book) => {
        return book.published;
    });

    const result = genreArray.reduce((acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc), {});
    const yearResult = yearArray.reduce(
        (acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc),
        {}
    );
    const final = [];
    const yearFinal = [];

    for (const [key, value] of Object.entries(result)) {
        final.push({
            name: key,
            value: value
        });
    }
    for (const [key, value] of Object.entries(yearResult)) {
        yearFinal.push({
            name: key,
            value: value
        });
    }

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent
    }: any) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <>
            <div className={classes.analyseContainer}>
                <div>
                    <h1>Analyse by genre</h1>
                    <div className="col-md-8">
                        <PieChart width={400} height={400}>
                            <Legend layout="vertical" verticalAlign="top" />
                            <Pie
                                data={final}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {final.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </div>
                </div>
                <div>
                    <h1>Analyse by Year Published</h1>
                    <div className="col-md-8">
                        <PieChart width={400} height={400}>
                            <Legend layout="vertical" verticalAlign="top" />
                            <Pie
                                data={yearFinal}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {yearFinal.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Analyse;
