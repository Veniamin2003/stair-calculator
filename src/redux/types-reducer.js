import React from 'react'
import pine from "./../Images/StairsTypes/materials/pine.png"
import pineCard from "./../Images/StairsTypes/texture/pine.jpg"
import larch from "./../Images/StairsTypes/materials/larch.png"
import larchCard from "./../Images/StairsTypes/texture/larch.jpg"
import oak from "./../Images/StairsTypes/materials/oak.png"
import oakCard from "./../Images/StairsTypes/texture/oak.jpg"
import beech from "./../Images/StairsTypes/materials/beech.png"
import beechCard from "./../Images/StairsTypes/texture/beech.jpg"

import type1 from "./../Images/StairsTypes/stair/1.jpg"
import type1Card from "./../Images/StairsTypes/stair/1.png"
import type2 from "./../Images/StairsTypes/stair/2.jpg"
import type2Card from "./../Images/StairsTypes/stair/2.png"
import type3 from "./../Images/StairsTypes/stair/3.jpg"
import type3Card from "./../Images/StairsTypes/stair/3.png"
import type4 from "./../Images/StairsTypes/stair/4.jpg"
import type4Card from "./../Images/StairsTypes/stair/4.png"

import anderST from "../Images/StairsTypes/anderstage/true.jpg"
import anderSTV from "../Images/StairsTypes/anderstage/trueView.png"
import anderSF from "../Images/StairsTypes/anderstage/false.jpg"
import anderSTF from "../Images/StairsTypes/anderstage/falseView.png"

import paint1 from "../Images/StairsTypes/paint/1.jpg"
import paintView1 from "../Images/StairsTypes/paint/1View.png"
import paint2 from "../Images/StairsTypes/paint/2.jpg"
import paintView2 from "../Images/StairsTypes/paint/2View.png"
import paint3 from "../Images/StairsTypes/paint/3.jpg"
import paintView3 from "../Images/StairsTypes/paint/3View.png"



const UPDATE_TYPE = 'UPDATE_TYPE';
const UPDATE_MATERIAL = 'UPDATE_MATERIAL';
const UPDATE_WIDTH_STAGES = 'UPDATE_WIDTH_STAGES';
const UPDATE_HEIGHT_STAGES = 'UPDATE_HEIGHT_STAGES';
const COUNT_ALL_SUM = 'COUNT_ALL_SUM';
const UPDATE_ANDER_STAGE = 'UPDATE_ANDER_STAGE';
const UPDATE_PAINT_TYPE = 'UPDATE_PAINT_TYPE';

let initialState = {
    stairsTypes: [
        {id: 1, name: 'Прямая лестница без площадки', img: type1, price: 700,
            viewImg: type1Card,  description: "Описание прямой лестницы"},
        {id: 2, name: 'Винтовая лестница 360 градусов', img: type2, price: 5000,
            viewImg: type2Card,  description: "Описание винтовой лестницы"},
        {id: 3, name: 'Г-образная лестница через ступеньку', img: type3, price: 2000,
            viewImg: type3Card,  description: "Описание Г-образной лестницы"},
        {id: 4, name: 'П-образная лестница через площадку', img: type4, price: 3500,
            viewImg: type4Card,  description: "Описание П-образной  лестницы"}
    ],

    materials: [
        {id: 1, name: 'Лиственица', img: larchCard , viewImg: larch, price: 800, description: "Высокая сопротивляемость влаги, короблению, гниению"},
        {id: 2, name: 'Бук экстра', img: beechCard, viewImg: beech, price: 1900, description: "Имеет натуральный красивый цвет, обладает высокой прочностью"},
        {id: 3, name: 'Сосна', img: pineCard, viewImg: pine, price: 1000, description: "Ступени из дуба всегда имеют более темный и благородный оттенок, чем аналоги"},
        {id: 4, name: 'Дуб', img: oakCard, viewImg: oak, price: 2500, description: "Имеет низкую теплопроводность – ступени будут теплыми на ощупь"},
    ],

    stairsSize: {
        size: [
            {id: 1, name: 'Ширина марша'},
            {id: 1, name: 'Высота марша'}
      ]
    },

    anderStage: [
        { id: 1, name: 'Отсутствует', img: anderSF, viewImg: anderSTF, price: 0, description:"Образует ощущение большего пространства в помещении"},
        { id: 2, name: 'Присутствует', img: anderST, viewImg: anderSTV, price: 1500, description: "Делает помещение более уютным и теплым"}
    ],

    paintType:
        {
            paintTypeItems:[
                {id: 1, name:'Шлифовка', img: paint1, viewImg: paintView1, price: 0, description:"Лестница принимает свой истиный облик. Только натуральный цвет" },
                {id: 2, name:'Лакировка', img: paint2, viewImg: paintView2, price: 300, description:"Лестница принимает свой истиный облик. Только натуральный цвет" },
                {id: 3, name:'Тонировка', img: paint3, viewImg: paintView3, price: 700, description:"Лестница принимает свой истиный облик. Только натуральный цвет"},
            ],
            selectedPaintTypeId: 1,


        },

    stairsTypesParams : {
        selectedStairsTypesId: 1,
    },

    stairMaterialsParam: {
        selectedMaterialId: 1,

    },

    anderStagesParam: {
        anderStageTypeSum: 0,
        selectedAnderStageId: 1
    },



    paintTypeSum: 0,
    ppp: 0,
    allSum: 0,
    countStages: 0,
    stairsWidth: 0,
    stairsHeight: 0,
    marchWidthSum: 0
};

const typesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TYPE:
            debugger
            return {
                ...state,
                typeSum: action.price,
                selectedStairsTypesId: action.selectedId
            }

        case UPDATE_MATERIAL:
            debugger
            return {
                ...state,
                materialSum: action.price,
                selectedMaterialId: action.selectedId
            };

        case UPDATE_WIDTH_STAGES:
            debugger
            let a = action.newCount
            let b = 0

            if (a < 100 && a > 0)
            {
                debugger
                b = 300
            }
            else if (a > 100 && a < 200)
            {
                debugger
                b = 600
            }
            else {
                b = 2000
            }

            state.ppp = b

            return {
                ...state,
                stairsWidth: action.newCount,
                marchWidthSum: state.ppp
            };

        case UPDATE_HEIGHT_STAGES:

            return {
                ...state,
                stairsHeight: action.newCount,
                countStages: Math.round(action.newCount / 14)
            };

        case COUNT_ALL_SUM:
            debugger
            return {
                ...state,
                allSum: (state.typeSum + state.materialSum + state.anderStageSum
                    + state.paintTypeSum + state.marchWidthSum ) * state.countStages
            };

        case UPDATE_ANDER_STAGE:
            debugger


            return {
                ...state,
                anderStageSum: action.price,
                selectedAnderStageId: action.selectedId
            };

        case UPDATE_PAINT_TYPE:
            debugger
            return {
                ...state,
                paintTypeSum: action.price,
                selectedPaintTypeId: action.selectedId
            };

        default:
            return state;
    }
}

export const updateTypeAC = (price, selectedId) => ({type: UPDATE_TYPE, price: price, selectedId: selectedId})
export const updateMaterialAC = (price, selectedId) => ({type: UPDATE_MATERIAL, price: price, selectedId: selectedId})
export const updateWidthStagesAC = (count) => ({type: UPDATE_WIDTH_STAGES, newCount: count})
export const updateHeightStagesAC = (count) => ({type: UPDATE_HEIGHT_STAGES, newCount: count})
export const countAllSumAC = () => ({type: COUNT_ALL_SUM})
export const updateAnderStageAC = (price, selectedId) => ({type: UPDATE_ANDER_STAGE, price: price, selectedId: selectedId})
export const updatePaintTypeAC = (price, selectedId) => ({type: UPDATE_PAINT_TYPE, price: price, selectedId: selectedId})


export default typesReducer;

