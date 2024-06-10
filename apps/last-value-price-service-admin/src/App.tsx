import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FinancialInstrumentList } from "./financialInstrument/FinancialInstrumentList";
import { FinancialInstrumentCreate } from "./financialInstrument/FinancialInstrumentCreate";
import { FinancialInstrumentEdit } from "./financialInstrument/FinancialInstrumentEdit";
import { FinancialInstrumentShow } from "./financialInstrument/FinancialInstrumentShow";
import { PriceRecordList } from "./priceRecord/PriceRecordList";
import { PriceRecordCreate } from "./priceRecord/PriceRecordCreate";
import { PriceRecordEdit } from "./priceRecord/PriceRecordEdit";
import { PriceRecordShow } from "./priceRecord/PriceRecordShow";
import { BatchRunRecordList } from "./batchRunRecord/BatchRunRecordList";
import { BatchRunRecordCreate } from "./batchRunRecord/BatchRunRecordCreate";
import { BatchRunRecordEdit } from "./batchRunRecord/BatchRunRecordEdit";
import { BatchRunRecordShow } from "./batchRunRecord/BatchRunRecordShow";
import { BatchRunList } from "./batchRun/BatchRunList";
import { BatchRunCreate } from "./batchRun/BatchRunCreate";
import { BatchRunEdit } from "./batchRun/BatchRunEdit";
import { BatchRunShow } from "./batchRun/BatchRunShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"LastValuePriceService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="FinancialInstrument"
          list={FinancialInstrumentList}
          edit={FinancialInstrumentEdit}
          create={FinancialInstrumentCreate}
          show={FinancialInstrumentShow}
        />
        <Resource
          name="PriceRecord"
          list={PriceRecordList}
          edit={PriceRecordEdit}
          create={PriceRecordCreate}
          show={PriceRecordShow}
        />
        <Resource
          name="BatchRunRecord"
          list={BatchRunRecordList}
          edit={BatchRunRecordEdit}
          create={BatchRunRecordCreate}
          show={BatchRunRecordShow}
        />
        <Resource
          name="BatchRun"
          list={BatchRunList}
          edit={BatchRunEdit}
          create={BatchRunCreate}
          show={BatchRunShow}
        />
      </Admin>
    </div>
  );
};

export default App;
