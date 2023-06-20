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
const UPDATE_LENGTH_STAGES = 'UPDATE_LENGTH_STAGES';
const UPDATE_THICK_STAGES = 'UPDATE_THICK_STAGES';
const UPDATE_LEDGE_STAGES = 'UPDATE_LEDGE_STAGES';
const UPDATE_STRING_STAGES = 'UPDATE_STRING_STAGES';

const COUNT_ALL_SUM = 'COUNT_ALL_SUM';
const UPDATE_ANDER_STAGE = 'UPDATE_ANDER_STAGE';
const UPDATE_PAINT_TYPE = 'UPDATE_PAINT_TYPE';
const UPDATE_RAIL_TYPE = 'UPDATE_RAIL_TYPE';
const UPDATE_WALL_MATERIAL = 'UPDATE_WALL_MATERIAL';

const ADD_STAIR_TYPE = 'ADD_STAIR_TYPE';
const UPDATE_ACTIVE_USER = 'UPDATE_ACTIVE_USER';

const ADD_PARAM_RAIL = 'ADD_PARAM_RAIL';
const ADD_PARAM_WALL_MATERIAL = 'ADD_PARAM_WALL_MATERIAL';
const ADD_PARAM_STAIR_TYPE = 'ADD_PARAM_STAIR_TYPE';

const UPDATE_DEL_RAIL_ARR = 'UPDATE_DEL_RAIL_ARR';
const UPDATE_DEL_WALL_MAT_ARR = 'UPDATE_DEL_WALL_MAT_ARR';
const UPDATE_DEL_STAIR_TYPE_ARR = 'UPDATE_DEL_STAIR_TYPE_ARR';

const DELETE_PARAM_RAIL = 'DELETE_PARAM_RAIL';
const DELETE_PARAM_WALL_MAT = 'DELETE_PARAM_WALL_MAT';

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

    wallMaterials: [
        {
            id: 1,
            name: 'Газобетон/Пеноблок',
            img: "https://blog.technogroup-kzn.ru/wp-content/uploads/2020/06/penobet-3.jpg" ,
            price: 0,
            description: "Крепление лестницы к данному материалу не состовляет сильных трудозатрат."
        },
        {
            id: 2,
            name: 'Дерево',
            img: "https://www.lodgers.ru/upload/018/u1898/b/1/24f5e5d2.jpg",
            price: 0,
            description: "Крепление лестницы к данному материалу не состовляет сильных трудозатрат."
        },
        {
            id: 3,
            name: 'Кирпич',
            img: "https://almode.ru/uploads/posts/2021-04/1619780619_12-p-imitatsiya-kirpichnoi-kladki-v-gostinoi-12.jpg",
            price: 0,
            description: "Крепление лестницы к данному материалу состовляет незначительные трудозатраты."
        },
    ],

    selectedWallMaterialId: 1,

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
                {id: 1, name:'Шлифовка', img: paint1, viewImg: paintView1, price: 300, description:"Лестница принимает свой истиный облик. Только натуральный цвет.  Стоимость за 1 п.м. - 300 руб." },
                {id: 2, name:'Лакировка', img: paint2, viewImg: paintView2, price: 600, description:"Лестница принимает свой истиный облик. Только натуральный цвет" },
                {id: 3, name:'Тонировка', img: paint3, viewImg: paintView3, price: 900, description:"Лестница принимает свой истиный облик. Только натуральный цвет"},
            ],
            selectedPaintTypeId: 1,
        },

    railTypes: [
        {
            id: 1,
            name: "Деревянные",
            img: "https://hotbox.3d-stl.com/medialibrary/34a/34af0507248c0cbe30df1a7625435b9d.jpg",
            price: 3000,
            description: "Деревянные перила хорошо вписываются в практически любой интерьей. Является самым распространенным видом ограждений. Цена за 1 п.м. = 3000"
        },
        {
            id: 2,
            name: "Кованные",
            img: "https://kovka-ajur.ru/files/catalog/upload/bddeac6fadaf3ab4713e0a63ecc504eb.jpg",
            price: 4500,
            description: "В общественных заведениях кованые перила для лестниц могут стать фирменной фишкой. Цена за 1 п.м. = 4500"
        }
    ],

    users: [
        {id: 1, name: "Вениамин", surname: "Петров", login: "veniapetrov941@gmail.com", password: "VeniaVeniaVenia2003"}
    ],

    idAU: "",
    nameAU: "",
    surnameAU: "",
    loginAU: "",
    passwordAU: "",

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

    railParams: {
        railTypeSum: 0,
        selectedRailId: 1,
    },

    activeDelArr: "rail",


    paintTypeSum: 0,
    ppp: 0,
    allSum: 0,
    wallMaterialTypeSum: 0,

    countStages: 0,
    stairsWidth: 0,
    stairsHeight: 0,
    stairsLength: 0,
    stairsThick: 0,
    stairsLedge: 0,
    stairsString: 0,
    marchWidthSum: 0,

    stairTypeName: "<<не выбрано>>",
    railTypeName: "<<не выбрано>>",
    materialName: "<<не выбрано>>",
    underStageType: "<<не выбрано>>",
    paintTypeName: "<<не выбрано>>",
    wallMaterialTypeName: "<<не выбрано>>",
};

const typesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TYPE:
            return {
                ...state,
                typeSum: action.price,
                selectedStairsTypesId: action.selectedId,
                stairTypeName: action.stairTypeName
            }

        case UPDATE_MATERIAL:
            return {
                ...state,
                materialSum: action.price,
                selectedMaterialId: action.selectedId,
                materialName: action.materialName
            };

        case UPDATE_WALL_MATERIAL:
            return {
                ...state,
                wallMaterialTypeSum: action.price,
                selectedWallMaterialId: action.selectedId,
                wallMaterialTypeName: action.wallMaterialName
            };

        case UPDATE_RAIL_TYPE:
            return {
                ...state,
                railTypeSum: action.price,
                selectedRailId: action.selectedId,
                railTypeName: action.railTypeName,
            };

        case UPDATE_WIDTH_STAGES:
            let a = action.newCount
            let b = 0

            if (a < 100 && a > 0)
            {
                b = 300
            }
            else if (a > 100 && a < 200)
            {
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

        case UPDATE_LENGTH_STAGES:
            return {
                ...state,
                stairsLength: action.newCount,
            };

        case UPDATE_THICK_STAGES:
            return {
                ...state,
                stairsThick: action.newCount,
            };

        case UPDATE_LEDGE_STAGES:
            return {
                ...state,
                stairsLedge: action.newCount,
            };

        case UPDATE_STRING_STAGES:
            return {
                ...state,
                stairsString: action.newCount,
            };

        case COUNT_ALL_SUM:
            return {
                ...state,
                allSum: (state.typeSum + state.materialSum + state.anderStageSum
                    + state.paintTypeSum + state.marchWidthSum + +state.railTypeSum) * state.countStages
            };

        case UPDATE_ANDER_STAGE:
            return {
                ...state,
                anderStageSum: action.price,
                selectedAnderStageId: action.selectedId,
                underStageType: action.underStageType
            };

        case UPDATE_PAINT_TYPE:
            return {
                ...state,
                paintTypeSum: action.price,
                selectedPaintTypeId: action.selectedId,
                paintTypeName: action.paintTypeName
            };

        case UPDATE_ACTIVE_USER:
            return {
                ...state,
                idAU: action.id,
                nameAU: action.name,
                surnameAU: action.surnameAU,
                loginAU: action.login,
                passwordAU: action.password
            };

        case ADD_PARAM_RAIL:
            let newRail = {
                id: action.id,
                name: action.name,
                img: action.img,
                price: action.price,
                description: action.description,
            };
            return {
                ...state,
                railTypes: [...state.railTypes, newRail],
            };

        case ADD_PARAM_WALL_MATERIAL:
            let newWallMaterial = {
                id: action.id,
                name: action.name,
                img: action.img,
                price: action.price,
                description: action.description,
            };
            return {
                ...state,
                wallMaterials: [...state.wallMaterials, newWallMaterial],
            };

        case ADD_PARAM_STAIR_TYPE:
            let newStairType = {
                id: action.id,
                name: action.name,
                img: action.img,
                viewImg: action.viewImg,
                price: action.price,
                description: action.description,
            };
            return {
                ...state,
                stairsTypes: [...state.stairsTypes, newStairType],
            };

        case ADD_STAIR_TYPE: {
            let newStairType = {
                id: 5,
                name: '5',
                img: type1,
                price: 555,
                viewImg: type1Card,
                description: "Описание 555"
            };
            return {
                ...state,
                stairsTypes: [...state.stairsTypes, newStairType],
            };
        }

        case DELETE_PARAM_RAIL: {
            return {
                ...state,
                railTypes: [...state.railTypes.filter(param => param.id !== action.id)],
            };
        }

        case DELETE_PARAM_WALL_MAT: {
            return {
                ...state,
                wallMaterials: [...state.wallMaterials.filter(param => param.id !== action.id)],
            };
        }

        case UPDATE_DEL_RAIL_ARR:
            debugger
            return {
                ...state,
                activeDelArr: action.name,
            };

        case UPDATE_DEL_WALL_MAT_ARR:
            debugger
            return {
                ...state,
                activeDelArr: action.name,
            };

        case UPDATE_DEL_STAIR_TYPE_ARR:
            return {
                ...state,
                activeDelArr: action.name,
            };

        default:
            return state;
    }
}

export const updateTypeAC = (price, selectedId, name) => ({type: UPDATE_TYPE, price: price, selectedId: selectedId, stairTypeName: name})
export const updateMaterialAC = (price, selectedId, name) => ({type: UPDATE_MATERIAL, price: price, selectedId: selectedId, materialName: name})
export const updateWallMaterialAC = (price, selectedId, name) => ({type: UPDATE_WALL_MATERIAL, price: price, selectedId: selectedId, wallMaterialName: name})

export const updateWidthStagesAC = (count) => ({type: UPDATE_WIDTH_STAGES, newCount: count})
export const updateHeightStagesAC = (count) => ({type: UPDATE_HEIGHT_STAGES, newCount: count})
export const updateLengthStagesAC = (count) => ({type: UPDATE_LENGTH_STAGES, newCount: count})
export const updateThickAC = (count) => ({type: UPDATE_THICK_STAGES, newCount: count})
export const updateLedgeAC = (count) => ({type: UPDATE_LEDGE_STAGES, newCount: count})
export const updateStringAC = (count) => ({type: UPDATE_STRING_STAGES, newCount: count})



export const countAllSumAC = () => ({type: COUNT_ALL_SUM})
export const updateAnderStageAC = (price, selectedId, name) => ({type: UPDATE_ANDER_STAGE, price: price, selectedId: selectedId, underStageType: name})
export const updatePaintTypeAC = (price, selectedId, name) => ({type: UPDATE_PAINT_TYPE, price: price, selectedId: selectedId, paintTypeName: name})
export const updateRailTypeAC = (price, selectedId, name) => ({type: UPDATE_RAIL_TYPE, price: price, selectedId: selectedId, railTypeName: name})

export const updateActiveUserAC = (id, name, surname, login, password) => ({type: UPDATE_ACTIVE_USER, id: id, name: name, surname: surname, login: login, password: password});

export const addParamRailAC = (id, name, price, description, img) => ({type: ADD_PARAM_RAIL, id: id, name: name, price: price, description: description, img: img});
export const addParamWallMaterialAC = (id, name, price, description, img) => ({type: ADD_PARAM_WALL_MATERIAL, id: id, name: name, price: price, description: description, img: img});
export const addParamStairTypeAC = (id, name, price, description, img, viewImg) => ({type: ADD_PARAM_STAIR_TYPE, id: id, name: name, price: price, description: description, img: img, viewImg: viewImg});

export const deleteRailTypeAC = (id) => ({type: DELETE_PARAM_RAIL, id: id});
export const deleteWallMatTypeAC = (id) => ({type: DELETE_PARAM_WALL_MAT, id: id});

export const updateActiveArrRailAC = (name) => ({type: UPDATE_DEL_RAIL_ARR, name: name})
export const updateActiveArrWallMatAC = (name) => ({type: UPDATE_DEL_WALL_MAT_ARR, name: name})
export const updateActiveStairTypeAC = (name) => ({type: UPDATE_DEL_STAIR_TYPE_ARR, name: name})


export const addStairTypeAC = () => ({type: ADD_STAIR_TYPE})

export default typesReducer;

