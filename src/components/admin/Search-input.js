import { Input } from '@mantine/core';
import { Search } from 'tabler-icons-react';

const SearchInput = ({classes, handler}) => {
    return (
      <Input icon={<Search />} placeholder="Поиск..." className={classes} onChange={handler}/>
    )
}
export default SearchInput;