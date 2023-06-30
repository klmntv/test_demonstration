import React, { ChangeEventHandler } from 'react';
import s from './Header.module.css';

type Props = {
  onChange: (id: string) => void;
  selectedId: string;
  graphList: number[];
};

const Header = ({ onChange, selectedId, graphList }: Props) => {
  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={s.header}>
      <span className={s.h1}>Graph</span>
      <select role="combobox" className={s.select} onChange={handleChange} value={selectedId}>
        <option role="placeholder" value="" disabled>
          Выберите граф
        </option>
        {graphList.map((graphId) => (
          <option className={s.option} key={graphId} value={graphId}>
            {graphId}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Header;
