import { Link } from 'react-router-dom';

const solutions = [
  {
    title: 'Hạ tầng CNTT',
    slug: 'ha-tang-cntt',
  },
  {
    title: 'Hệ thống CCTV',
    slug: 'cctv',
  },
];

export default function SolutionsList() {
  return (
    <div>
      <h1>Giải pháp</h1>

      {solutions.map(item => (
        <Link key={item.slug} to={`/solutions/${item.slug}`}>
          <div>{item.title}</div>
        </Link>
      ))}
    </div>
  );
}