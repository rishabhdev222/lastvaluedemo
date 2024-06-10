import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { PriceRecordTitle } from "../priceRecord/PriceRecordTitle";

export const FinancialInstrumentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="priceRecords"
          reference="PriceRecord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PriceRecordTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
