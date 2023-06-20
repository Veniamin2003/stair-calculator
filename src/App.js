import './App.css';
import StairsTypesContainer from "./Components/StairsTypes/StairsTypesContainer";
import MaterialsContainer from "./Components/Materials/MaterialsContainer";
import CountStagesContainer from "./Components/CountStages/CountStagesContainer";
import ResultsContainer from "./Components/Results/ResultsContainer";
import AnderStageContainer from "./Components/AnderStage/AnderStageContainer";
import PaintTypeContainer from "./Components/PaintType/PaintTypeContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import StairTypeViewContainer
    from "./Components/ImageView/StairsTypeView/StairTypeViewContainer/StairTypeViewContainer";
import Footer from "./Components/Footer/Footer";
import NavCalc from "./Components/NavTop/NavCalc";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import {ExportExcel} from "./Pages/ExportPage/ExportExcel";
import ExportExcelContainer from "./Pages/ExportPage/ExportExcelContainer";
import AdminPanel from "./AdminPanel/AdminPanel";
import StairTypesPage from "./Pages/ResultsPage";
import MaterialsTypesPage from "./Pages/MaterialTypesPage.js";
import AnderStagePage from "./Pages/AnderSatgePage";
import PaintTypePage from "./Pages/PaintTypePage";
import RailPage from "./Pages/RailPage";
import CountStagePage from "./Pages/CountStagePage";
import ResultsPage from "./Pages/ResultsTypesPage";
import ExportExcelPage from "./Pages/ExportExcelPage";
import LoginContainer from "./AdminPanel/Login/LoginContainer";
import AdminPanelContainer from "./AdminPanel/AdminPanelContainer";
import WallMaterialsTypesContainer from "./Components/WallMaterialsType/WallMaterialsTypesContainer";
import WallMaterialsTypePage from "./Pages/WallMaterialsTypePage";
import DeleteContainer from "./AdminPanel/DeletePanel/DeleteContainer";
import LoginClientContainer from "./Components/Login/LoginClientContainer";
import TasksContainer from "./Components/Tasks/TasksContainer";
import ShowTasksContainer from "./AdminPanel/ShowTasks/ShowTasksContainer";
import RegContainer from "./Components/Login/Registration/RegContainer";

function App(props) {
    return (
        <BrowserRouter>
            <NavCalc/>
            <div>
                <Routes>
                    <Route path='/'
                           element={<StairTypesPage/>}/>

                    <Route path='/calc'
                           element={<StairTypesPage/>}/>

                    <Route path='/calc/stair-types'
                           element={<StairTypesPage/>}/>

                    <Route path='/calc/stair-material'
                           element={<MaterialsTypesPage/>}/>

                    {<Route path='/calc/ander-stage-type'
                            element={<AnderStagePage/>}/>}

                    <Route path='/calc/paint-type'
                           element={<PaintTypePage />}/>

                    <Route path='/calc/rails'
                           element={<RailPage/>}/>

                    <Route path='/calc/wall-materials'
                           element={<WallMaterialsTypePage />}/>

                    <Route path='/calc/stair-size'
                           element={<CountStagePage/>}/>

                    <Route path='/calc/form'
                           element={<ResultsPage/>}/>

                    <Route path='/calc/export'
                           element={<ExportExcelPage/>}/>

                    <Route path='/calc/add'
                           element={<LoginContainer/>}/>

                    <Route path='/calc/delete-panel'
                           element={<DeleteContainer/>}/>

                    <Route path='/calc/admin-panel'
                           element={<AdminPanelContainer/>}/>

                    <Route path='/calc/login'
                           element={<LoginClientContainer />}/>

                    <Route path='/calc/my-tasks'
                           element={<TasksContainer/>}/>

                    <Route path='/calc/show-tasks-admin'
                           element={<ShowTasksContainer/>}/>

                    <Route path='/calc/registration'
                           element={<RegContainer />}/>


                </Routes>


            </div>
            <Footer/>
        </BrowserRouter>


        /*<div>
            <WallMaterialsTypesContainer/>
            <MaterialsContainer />
            <AnderStageContainer />
            <CountStagesContainer />
            <PaintTypeContainer />
            <ResultsContainer />
        </div>*/
    );
}

export default App;
