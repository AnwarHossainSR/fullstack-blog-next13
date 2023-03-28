import { cx } from '@/utils/all';
// eslint-disable-next-line @typescript-eslint/no-explicit-any

type LabelProps = {
  color: string;
  children: any;
};

export default function Label(props: LabelProps) {
  const { color, children } = props;
  const colors: any = {
    green: 'text-green-500',
    blue: 'text-blue-500',
    orange: 'text-orange-400',
    purple: 'text-purple-500',
    pink: 'text-pink-500',
  };

  const colorClass = colors[color] || colors.pink;

  return (
    <span
      className={cx(
        'inline-block mt-5 text-xs font-medium tracking-wider uppercase ',
        colorClass
      )}
    >
      {children}
    </span>
  );
}
