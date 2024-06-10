import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FinancialInstrumentTitle } from "../financialInstrument/FinancialInstrumentTitle";

export const PriceRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="asOf" source="asOf" />
        <ReferenceInput
          source="financialInstrument.id"
          reference="FinancialInstrument"
          label="FinancialInstrument"
        >
          <SelectInput optionText={FinancialInstrumentTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Edit>
  );
};
