import { Input } from '@mantine/core';
import { Search } from 'tabler-icons-react';

const SearchInput = ({handler}) => {
    return (
      <Input mb="md" mt="md" style={{width: "100%"}} icon={<Search />} placeholder="Поиск..." onChange={handler}/>
    )
}
export default SearchInput;