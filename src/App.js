import './App.css';
import StairsTypesContainer from "./Components/StairsTypes/StairsTypesContainer";
import MaterialsContainer from "./Components/Materials/MaterialsContainer";
import CountStagesContainer from "./Components/CountStages/CountStagesContainer";
import ResultsContainer from "./Components/Results/ResultsContainer";
import AnderStageContainer from "./Components/AnderStage/AnderStageContainer";
import PaintTypeContainer from "./Components/PaintType/PaintTypeContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import StairTypeViewContainer from "./Components/ImageView/StairsTypeView/StairTypeViewContainer/StairTypeViewContainer";

function App(props) {
    debugger
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <StairTypeViewContainer />
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/'
                               element={<StairsTypesContainer/>}/>

                        <Route path='/stair-types'
                               element={<StairsTypesContainer/>}/>

                        <Route path='/stair-material'
                               element={<MaterialsContainer />}/>

                        {<Route path='/ander-stage-type'
                                element={<AnderStageContainer />}/>}

                        <Route path='/paint-type'
                               element={<PaintTypeContainer />}/>

                        <Route path='/stair-size'
                               element={<CountStagesContainer />}/>

                        <Route path='/results'
                               element={<ResultsContainer />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>


        /*<div>
            <StairsTypesContainer/>
            <MaterialsContainer />
            <AnderStageContainer />
            <CountStagesContainer />
            <PaintTypeContainer />
            <ResultsContainer />
        </div>*/
    );
}

export default App;
