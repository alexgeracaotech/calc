
import Box from './Box.jsx';
import Display from './Display.jsx';
import Digit from './Digit.jsx';
import Button from './Button.jsx';
import { useState } from 'react';

const App = () => {

  const [value, setValue] = useState('0');

  return (
    <>
      <Box>
        <Display>
          <Digit digit={value} />
        </Display>
        <Box
          display='grid'
          columns='grid-cols-4'
          gap='gap-2'
          padding='py-3'
        >
          <Button
            type='('
            backgroundColor='bg-gray-700'
            hover='hover:bg-gray-600'
            setValue={setValue}
          />
          <Button
            type=')'
            backgroundColor='bg-gray-700'
            hover='hover:bg-gray-600'
            setValue={setValue}
          />
          <Button
            type='%'
            backgroundColor='bg-gray-700'
            hover='hover:bg-gray-600'
            setValue={setValue}
          />
          <Button
            type='AC'
            backgroundColor='bg-gray-700'
            hover='hover:bg-gray-600'
            setValue={setValue}
          />

          <Button
            type='7'
            backgroundColor='bg-zinc-700'
            hover='hover:bg-zinc-600'
            setValue={setValue}
          />
          <Button
            type='8'
            backgroundColor='bg-zinc-700'
            hover='hover:bg-zinc-600'
            setValue={setValue}
          />
          <Button
            type='9'
            backgroundColor='bg-zinc-700'
            hover='hover:bg-zinc-600'
            setValue={setValue}
          />
          <Button
            type='/'
            backgroundColor='bg-gray-700'
            hover='hover:bg-gray-600'
            setValue={setValue}
          />

          <Button
            type='4'
            backgroundColor='bg-zinc-700'
            hover='hover:bg-zinc-600'
            setValue={setValue}
          />
          <Button
            type='5'
            backgroundColor='bg-zinc-700'
            hover='hover:bg-zinc-600'
            setValue={setValue}
          />
          <Button
            type='6'
            backgroundColor='bg-zinc-700'
            hover='hover:bg-zinc-600'
            setValue={setValue}
          />
          <Button
            type='*'
            backgroundColor='bg-gray-700'
            hover='hover:bg-gray-600'
            setValue={setValue}
          />

          <Button
            type='1'
            backgroundColor='bg-zinc-700'
            hover='hover:bg-zinc-600'
            setValue={setValue}
          />
          <Button
            type='2'
            backgroundColor='bg-zinc-700'
            hover='hover:bg-zinc-600'
            setValue={setValue}
          />
          <Button
            type='3'
            backgroundColor='bg-zinc-700'
            hover='hover:bg-zinc-600'
            setValue={setValue}
          />
          <Button
            type='-'
            backgroundColor='bg-gray-700'
            hover='hover:bg-gray-600'
            setValue={setValue}
          />

          <Button
            type='.'
            backgroundColor='bg-zinc-700'
            hover='hover:bg-zinc-600'
            setValue={setValue}
          />
          <Button
            type='0'
            backgroundColor='bg-zinc-700'
            hover='hover:bg-zinc-600'
            setValue={setValue}
          />
          <Button
            type='='
            backgroundColor='bg-indigo-800'
            hover='hover:bg-indigo-700'
            setValue={setValue}
          />
          <Button
            type='+'
            backgroundColor='bg-gray-700'
            hover='hover:bg-gray-600'
            setValue={setValue}
          />
        </Box>
      </Box>
    </>
  );
}

export default App;
