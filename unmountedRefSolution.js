import React, { useRef, useEffect, useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    // Cleanup function to prevent callback execution after unmount
    return () => {
        myRef.current = null;
      };
  }, []);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
    // This will now safely not cause an error
    if (myRef.current) {
        myRef.current.doSomething();
    }
  };

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
    </View>
  );
};
export default MyComponent;