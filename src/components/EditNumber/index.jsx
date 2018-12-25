// @flow

import * as React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const EditWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 86px;
  height: 13px;
  margin-right: 174px;
`;

const Plus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto-light';
  font-size: 22px;
  color: rgb(141, 141, 141);
  margin-right: 10px;
  line-height: 1.2;
  cursor: pointer;
`;

const NumberOfItems = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  font-size: 16px;
  color: rgb(0, 0, 0);
  line-height: 1.2;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const Minus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto-light';
  font-size: 22px;
  color: rgb(141, 141, 141);
  margin-left: 10px;
  line-height: 1.2;
  cursor: pointer;
`;

// функции описать

type ObjectUser = {
  img: string,
  description: string,
  code: string,
  size: string,
  color: string,
  price: number,
  numberOfItems: number,
  id: number,
}

type TypedUserItems = Array<ObjectUser> | []

type typedProps = {
  userItems?: TypedUserItems,
  id?: ?number,
  numberOfItems?: ?number,
  increment?: any,
  decrement?: any,
};

export function EditNumber(props: typedProps) {
  const { userItems, id, numberOfItems, increment, decrement } = props;
  return (
    <EditWrapper>
      <Minus
        className="decrementFunc"
        onClick={() => decrement(userItems, id, numberOfItems)}
      >
        -
      </Minus>
      <NumberOfItems>{numberOfItems}</NumberOfItems>
      <Plus
        className="incrementFunc"
        onClick={() => increment(userItems, id, numberOfItems)}
      >
        +
      </Plus>
    </EditWrapper>
  );
}

EditNumber.defaultProps = {
  userItems: [],
  id: 0,
  numberOfItems: 0,
  increment: () => 'test_increment',
  decrement: () => 'test_decrement',
};

// EditNumber.propTypes = {
//   userItems: PropTypes.array.isRequired,
//   id: PropTypes.number.isRequired,
//   numberOfItems: PropTypes.number.isRequired,
//   increment: PropTypes.func.isRequired,
//   decrement: PropTypes.func.isRequired,
// }
