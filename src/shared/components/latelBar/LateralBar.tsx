import type { CheckboxProps, GetProp } from 'antd';
import { Checkbox, Divider } from 'antd';
import React, { useEffect, useState } from 'react';

import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
import { URL_CATEGORY } from '../../constants/urls';
import { MethodsEnum } from '../../enums/methods.enum';
import { useRequest } from '../../hooks/useRequest';
import { CategoryType } from '../../types/CategoryType';
import { LateralContainer } from './lateralBar.style';

type CheckboxValueType = GetProp<typeof Checkbox.Group, 'value'>[number];

export const LateralBar: React.FC = () => {
  const { categories, setCategories } = useCategoryReducer();
  const { request } = useRequest();
  useEffect(() => {
    request<CategoryType[]>(URL_CATEGORY, MethodsEnum.GET, setCategories);
  }, []);

  const CheckboxGroup = Checkbox.Group;

  const plainOptions = [...categories.map((category) => category.name)];
  const defaultCheckedList: Array<string> = [];

  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);

  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };

  return (
    <LateralContainer>
      <Checkbox
        disabled
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </Checkbox>
      <Divider />
      <div>Categorias</div>
      <CheckboxGroup
        disabled
        style={{ display: 'flex', flexDirection: 'column' }}
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
        name="Categorias"
      />
    </LateralContainer>
  );
};
