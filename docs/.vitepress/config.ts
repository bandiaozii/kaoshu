import { defineConfig } from 'vitepress'
// import renderPermaLink from './render-perma-link'
// import MarkDownItCustomAnchor from './t-custom-anchor'
const ogDescription = 'Next Generation Frontend Tooling'
const ogImage = 'https://vitejs.dev/og-image.png'
const ogTitle = 'Vite'
const ogUrl = 'https://vitejs.dev'

import {nav} from "./theme/configs/nav.js"

// import { sidebar } from "./theme/configs/sidebar.js"

import { sidebarclincal } from "./theme/configs/sidebarclincal.js"
import { sidebarimmune } from "./theme/configs/sidebarimmune.js"
import { sidebarblood } from "./theme/configs/sidebarblood.js"
import { sidebarcmicroorganism } from "./theme/configs/sidebarcmicroorganism.js"
import { sidebarbiochemical } from "./theme/configs/sidebarbiochemical.js"



export default defineConfig({
    title: '医检考术',
    description: '分享医学检验考试笔记',
    lang: 'zh-CN',
    base: '/',
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: ogTitle }],
        ['meta', { property: 'og:image', content: ogImage }],
        ['meta', { property: 'og:url', content: ogUrl }],
        ['meta', { property: 'og:description', content: ogDescription }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:site', content: '@vite_js' }],
        ['meta', { name: 'theme-color', content: '#646cff' }],

    ],
    

    vue: {
        reactivityTransform: true
    },
    themeConfig: {
        logo: '/logo.svg',

        // editLink: {
        //     text: '为此页提供修改建议',
        //     pattern: 'https://github.com/vitejs/docs-cn/edit/main/:path'
        // },

        // socialLinks: [
        //     { icon: 'twitter', link: 'https://twitter.com/vite_js' },
        //     { icon: 'discord', link: 'https://chat.vitejs.dev' },
        //     { icon: 'github', link: 'https://github.com/vitejs/vite' }
        // ],

        // algolia: {
        //     appId: '7H67QR5P0A',
        //     apiKey: 'deaab78bcdfe96b599497d25acc6460e',
        //     indexName: 'vitejs',
        //     searchParameters: {
        //         facetFilters: ['tags:cn']
        //     }
        // },

        carbonAds: {
            code: 'CEBIEK3N',
            placement: 'vitejsdev'
        },

        // localeLinks: {
        //     text: '简体中文',
        //     items: [
        //         { text: 'English', link: 'https://vitejs.dev' },
        //         { text: '日本語', link: 'https://ja.vitejs.dev' },
        //         { text: 'Español', link: 'https://es.vitejs.dev' }
        //     ]
        // },

        footer: {
            copyright:
                '本文档内容版权为检验考术所有，保留所有权利。'
        },

        nav,

        // sidebar:sidebar(),

        sidebar: {
            'guide/clinical/': sidebarclincal(),
            'guide/immune/': sidebarimmune(),
            'guide/blood/': sidebarblood(),
            'guide/microorganism/': sidebarcmicroorganism(),
            'guide/biochemical/': sidebarbiochemical(),
        },

        // sidebar:{
        //     '/guide/clinical': [
        //         {
        //             text: '临床检验基础',
        //             collapsible: true,
        //             items: [
        //                 { text: '一 血液样本采集和血涂片制备', link: '/guide/clinical/Blood' },
        //                 { text: '二、红细胞检查', link: '/guide/clinical/ErythrocyteTest' },
        //                 { text: '三、白细胞检查', link: '/guide/clinical/Leucocyte' },
        //                 { text: '四、血液分析仪及其临床应用', link: '/guide/clinical/BloodAnalyzer' },
        //                 { text: '五、血型和输血', link: '/guide/clinical/BloodType ' },
        //                 { text: '六、尿液生成和标本采集及处理', link: '/guide/clinical/UrineSource' },
        //                 { text: '七、尿理学检验', link: '/guide/clinical/UrineTest' },
        //                 {text: '八、尿有形成分检查', link: '/guide/clinical/UrineCompositionExamination'},
        //                 { text: '九、尿液化学检查', link: '/guide/clinical/UrineChemistry' },
        //                 { text: '十、尿液分析仪及其临床应用', link: '/guide/clinical/UrineAnalyzer' },
        //                 { text: '十一、粪便检验', link: '/guide/clinical/StoolTest' },
        //                 { text: '十二、脑脊液检验', link: '/guide/clinical/CerebrospinalFluidTests' },
        //                 { text: '十三、浆膜腔积液检验', link: '/guide/clinical/SerousCavityEffusion' },
        //                 { text: '十四、精液检查', link: '/guide/clinical/SemenTest' },
        //                 { text: '十五、前列腺液检查', link: '/guide/clinical/ProstaticFluid' },
        //                 { text: '十六、阴道分泌物检查', link: '/guide/clinical/VaginalDischarge' },
        //                 { text: '十七、羊水检查', link: '/guide/clinical/AmnioticFluid' },
        //                 {text: '十八、痰及支气管肺泡灌洗液检查', link: '/guide/clinical/SputumBronchoalveolarLavageFluid'},
        //                 { text: '十九、胃液和十二指肠引流液检验', link: '/guide/clinical/GastricJuice' },
        //                 { text: '二十、脱落细胞检查', link: '/guide/clinical/ExfoliatedCell' }
        //             ]
        //         },
        //         {
        //             text: '一、血液样本采集和血涂片制备',
        //             collapsible: true,
        //             items: [
        //                 { text: '一 血液样本采集和血涂片制备', link: '/guide/clinical/1/1.1' },
        //                 { text: '二、红细胞检查', link: '/guide/clinical/1/1.2' },
        //                 { text: '三、白细胞检查', link: '/guide/clinical/1/1.3' },
        //                 { text: '四、血液分析仪及其临床应用', link: '/guide/clinical/1/1.4' },
        //                 { text: '五、血型和输血', link: '/guide/clinical/1/1.5' },
        //                 { text: '六、尿液生成和标本采集及处理', link: '/guide/clinical/1/1.6' },
        //                 { text: '六、尿液生成和标本采集及处理', link: '/guide/clinical/1/1.7' }
        //             ]
        //         }
        //     ],
        //     '/guide/biochemical': [
        //         {
        //             text: '生化检验',
        //             collapsible: true,
        //             items: [
        //                 { text: '一、绪论', link: '/guide/biochemical/Introduction' },
        //                 {text: '二、糖代谢紊乱及糖尿病的检查', link: '/guide/biochemical/Diabetes'},
        //                 {
        //                     text: '三、脂代谢及高脂血症的检查',
        //                     link: '/guide/biochemical/LipidMetabolism'
        //                 },
        //                 { text: '四、血浆蛋白质检查', link: '/guide/biochemical/PlasmaProtein' },
        //                 { text: '五、诊断酶学', link: '/guide/biochemical/Enzymology' },
        //                 {
        //                     text: '六、体液平衡紊乱及其检查',
        //                     link: '/guide/biochemical/BodyFluids'
        //                 },
        //                 {
        //                     text: '七、钙、磷、镁代谢与微量元素',
        //                     link: '/guide/biochemical/TraceElements'
        //                 },
        //                 {
        //                     text: '八、治疗药物浓度监测',
        //                     link: '/guide/biochemical/DrugConcentration'
        //                 },
        //                 {
        //                     text: '九、心肌损伤的生化标志物',
        //                     link: '/guide/biochemical/MyocardialInjury'
        //                 },
        //                 { text: '十、肝胆疾病的实验室检查', link: '/guide/biochemical/Courage' },
        //                 {
        //                     text: '十一、肾功能及早期肾损伤的检查',
        //                     link: '/guide/biochemical/Renal'
        //                 },
        //                 { text: '十二、胰腺疾病的检查', link: '/guide/biochemical/Pancreas' },
        //                 { text: '十三、内分泌疾病的检查', link: '/guide/biochemical/Endocrine' },
        //                 {
        //                     text: '十四、临床化学常用分析技术',
        //                     link: '/guide/biochemical/ClinicalChemistry'
        //                 },
        //                 {
        //                     text: '十五、临床自动化学分析仪',
        //                     link: '/guide/biochemical/ChemicalAnalysis'
        //                 }
        //             ]
        //         },
        //     ],
        //     '/guide/blood': [
        //         {
        //             text: '血液学检验',
        //             collapsible: true,
        //             items: [
        //                 { text: '一、绪论', link: '/guide/blood/1' },
        //                 {
        //                     text: '二、造血与血细胞分化发育',
        //                     link: '/guide/blood/2'
        //                 },
        //                 {
        //                     text: '三、骨髓细胞学检查的临床意义',
        //                     link: '/guide/blood/3'
        //                 },
        //                 { text: '四、血细胞化学染色的临床应用', link: '/guide/blood/4' },
        //                 { text: '五、血细胞超微结构检查的临床应用', link: '/guide/blood/5' },
        //                 {
        //                     text: '六、血细胞染色体检查的临床应用',
        //                     link: '/guide/blood/6'
        //                 },
        //                 {
        //                     text: '七、贫血及其细胞学检验',
        //                     link: '/guide/blood/7'
        //                 },
        //                 {
        //                     text: '八、白血病概述',
        //                     link: '/guide/blood/8'
        //                 },
        //                 {
        //                     text: '九、急性淋巴细胞白血病及其实验诊断',
        //                     link: '/guide/blood/9'
        //                 },
        //                 { text: '十、急性髓细胞白血病', link: '/guide/blood/10' },
        //                 {
        //                     text: '十一、慢性白血病',
        //                     link: '/guide/blood/11'
        //                 },
        //                 { text: '十二、特殊类型白血病', link: '/guide/blood/12' },
        //                 { text: '十三、骨髓增生异常综合征及其实验诊断', link: '/guide/blood/13' },
        //                 {
        //                     text: '十四、恶性淋巴瘤及其实验诊断',
        //                     link: '/guide/blood/14'
        //                 },
        //                 {
        //                     text: '十五、浆细胞病及其实验诊断',
        //                     link: '/guide/blood/15'
        //                 },
        //                 { text: '十六、骨髓增生性疾病及其实验诊断', link: '/guide/blood/16' },
        //                 {
        //                     text: '十七、恶性组织细胞病及其实验诊断',
        //                     link: '/guide/blood/17'
        //                 },
        //                 {
        //                     text: '十八、其他白细胞疾病及其实验诊断',
        //                     link: '/guide/blood/18'
        //                 },
        //                 { text: '十九、类脂质沉积病及其实验诊断', link: '/guide/blood/19' },
        //                 { text: '五、诊断酶学', link: '/guide/blood/20' },
        //                 {
        //                     text: '二十、出血与血栓的基础理论',
        //                     link: '/guide/blood/21'
        //                 },
        //                 {
        //                     text: '二十一、血栓与止血检验的基本方法',
        //                     link: '/guide/blood/22'
        //                 },
        //                 {
        //                     text: '二十二、常见出血性疾病的实验诊断',
        //                     link: '/guide/blood/23'
        //                 },
        //                 {
        //                     text: '二十三、血栓性疾病及其实验诊断',
        //                     link: '/guide/blood/24'
        //                 },
        //                 { text: '二十四、抗栓与溶栓治疗的实验室监测', link: '/guide/blood/25' },
        //                 { text: '二十五、出凝血试验的自动化', link: '/guide/blood/26' }
        //             ]
        //         },
        //     ],
        //     '/guide/immune': [
        //
        //         {
        //             text: '免疫学检验',
        //             collapsible: true,
        //             items: [
        //                 { text: '一、概述', link: '/guide/immune/1' },
        //                 {
        //                     text: '二、抗原抗体反应',
        //                     link: '/guide/immune/2'
        //                 },
        //                 {
        //                     text: '三、免疫原和抗血清的制备',
        //                     link: '/guide/immune/3'
        //                 },
        //                 { text: '四、单克隆抗体与基因工程抗体的制备', link: '/guide/immune/4' },
        //                 { text: '五、凝集反应', link: '/guide/immune/5' },
        //                 {
        //                     text: '六、沉淀反应',
        //                     link: '/guide/immune/6'
        //                 },
        //                 {
        //                     text: '七、放射免疫分析',
        //                     link: '/guide/immune/7'
        //                 },
        //                 {
        //                     text: '八、荧光免疫技术',
        //                     link: '/guide/immune/8'
        //                 },
        //                 {
        //                     text: '九、酶免疫技术',
        //                     link: '/guide/immune/9'
        //                 },
        //                 { text: '十、化学发光免疫技术', link: '/guide/immune/10' },
        //                 {
        //                     text: '十一、生物素-亲和素放大技术',
        //                     link: '/guide/immune/11'
        //                 },
        //                 { text: '十二、固相膜免疫测定', link: '/guide/immune/12' },
        //                 { text: '十三、免疫组织化学技术', link: '/guide/immune/13' },
        //                 {
        //                     text: '十四、免疫细胞的分离及其表面标志检测技术',
        //                     link: '/guide/immune/14'
        //                 },
        //                 {
        //                     text: '十五、免疫细胞功能检测技术',
        //                     link: '/guide/immune/15'
        //                 },
        //                 {
        //                     text: '十六、细胞因子与细胞黏附因子的测定',
        //                     link: '/guide/immune/16'
        //                 },
        //                 {
        //                     text: '十七、流式细胞仪分析技术及应用',
        //                     link: '/guide/immune/17'
        //                 },
        //                 {
        //                     text: '十八、体液免疫球蛋白测定',
        //                     link: '/guide/immune/18'
        //                 },  {
        //                     text: '十九、补体检测及应用',
        //                     link: '/guide/immune/19'
        //                 },
        //                 {
        //                     text: '二十、免疫检验自动化仪器分析',
        //                     link: '/guide/immune/20'
        //                 },
        //                 {
        //                     text: '二十一、临床免疫检验的质量保证',
        //                     link: '/guide/immune/21'
        //                 },  {
        //                     text: '二十二、感染性疾病与感染免疫检测',
        //                     link: '/guide/immune/22'
        //                 },
        //                 {
        //                     text: '二十三、超敏反应性疾病及其免疫检测',
        //                     link: '/guide/immune/23'
        //                 },
        //                 {
        //                     text: '二十四、自身免疫性疾病及其免疫检测',
        //                     link: '/guide/immune/24'
        //                 },  {
        //                     text: '二十五、免疫增殖性疾病及其免疫检测',
        //                     link: '/guide/immune/25'
        //                 },
        //                 {
        //                     text: '二十六、免疫缺陷性疾病及其免疫检验',
        //                     link: '/guide/immune/26'
        //                 },
        //                 {
        //                     text: '二十七、肿瘤免疫与免疫学检验',
        //                     link: '/guide/immune/27'
        //                 },
        //                 {
        //                     text: '二十八、移植免疫及其免疫检测',
        //                     link: '/guide/immune/28'
        //                 },
        //                 {
        //                     text: '二十九、医疗机构从业人员行为规范.',
        //                     link: '/guide/immune/29'
        //                 }
        //             ]
        //         },
        //     ],
        //     '/guide/microorganism': [
        //         {
        //             text: '微生物学检验',
        //             collapsible: false,
        //             items: [
        //                 { text: '一、绪论', link: '/guide/microorganism/1' },
        //                 {
        //                     text: '二、细菌的形态和结构',
        //                     link: '/guide/microorganism/2'
        //                 },
        //                 {
        //                     text: '三、细菌的生理',
        //                     link: '/guide/microorganism/3'
        //                 },
        //                 { text: '四、细菌的分布', link: '/guide/microorganism/4' },
        //                 { text: '五、外界因素对细菌的影响', link: '/guide/microorganism/5' },
        //                 {
        //                     text: '六、细菌的遗传与变异',
        //                     link: '/guide/microorganism/6'
        //                 },
        //                 {
        //                     text: '七、微生物的致病性与感染',
        //                     link: '/guide/microorganism/7'
        //                 },
        //                 {
        //                     text: '八、细菌的分类与命名',
        //                     link: '/guide/microorganism/8'
        //                 },
        //                 {
        //                     text: '九、微生物检验概述',
        //                     link: '/guide/microorganism/9'
        //                 },
        //                 { text: '十、细菌形态学检查法', link: '/guide/microorganism/10' },
        //                 {
        //                     text: '十一、培养基',
        //                     link: '/guide/microorganism/11'
        //                 },
        //                 { text: '十二、细菌的培养与分离技术', link: '/guide/microorganism/12' },
        //                 { text: '十三、细菌的生物化学试验', link: '/guide/microorganism/13' },
        //                 {
        //                     text: '十四、血清学试验',
        //                     link: '/guide/microorganism/14'
        //                 },
        //                 {
        //                     text: '十五、动物实验',
        //                     link: '/guide/microorganism/15'
        //                 },
        //                 {
        //                     text: '十六、菌种保存与管理',
        //                     link: '/guide/microorganism/16'
        //                 },
        //                 {
        //                     text: '十七、细菌检验的商品化',
        //                     link: '/guide/microorganism/17'
        //                 },
        //                 {
        //                     text: '十八、病原性球菌及检验',
        //                     link: '/guide/microorganism/18'
        //                 },  {
        //                     text: '十九、肠杆菌科及检验',
        //                     link: '/guide/microorganism/19'
        //                 },
        //                 {
        //                     text: '二十、弧菌科及检验',
        //                     link: '/guide/microorganism/20'
        //                 },
        //                 {
        //                     text: '二十一、弯曲菌属和幽门螺杆菌及检验',
        //                     link: '/guide/microorganism/21'
        //                 },  {
        //                     text: '二十二、厌氧性细菌及检验',
        //                     link: '/guide/microorganism/22'
        //                 },
        //                 {
        //                     text: '二十三、需氧兼性厌氧革兰阳性杆菌及检验',
        //                     link: '/guide/microorganism/23'
        //                 },
        //                 {
        //                     text: '二十四、分支杆菌属及检验',
        //                     link: '/guide/microorganism/24'
        //                 },  {
        //                     text: '二十五、非发酵菌及检验',
        //                     link: '/guide/microorganism/25'
        //                 },
        //                 {
        //                     text: '二十六、其他革兰阴性杆菌及检验',
        //                     link: '/guide/microorganism/26'
        //                 },
        //                 {
        //                     text: '二十七、衣原体及检验',
        //                     link: '/guide/microorganism/27'
        //                 },
        //                 {
        //                     text: '二十八、立克次体及检验',
        //                     link: '/guide/microorganism/28'
        //                 },
        //                 {
        //                     text: '二十九、支原体及检验.',
        //                     link: '/guide/microorganism/29'
        //                 },
        //                 {
        //                     text: '三十、病原性放线菌及检验',
        //                     link: '/guide/microorganism/30'
        //                 },
        //                 {
        //                     text: '三十一、螺旋体及检验',
        //                     link: '/guide/microorganism/31'
        //                 },
        //                 {
        //                     text: '三十二、病毒感染的实验诊断',
        //                     link: '/guide/microorganism/32'
        //                 },
        //                 {
        //                     text: '三十三、真菌检验',
        //                     link: '/guide/microorganism/33'
        //                 },
        //                 {
        //                     text: '三十四、临床标本微生物检验概述',
        //                     link: '/guide/microorganism/34'
        //                 },
        //                 {
        //                     text: '三十五、细菌对药物的敏感试验',
        //                     link: '/guide/microorganism/35'
        //                 },
        //             ]
        //         },
        //     ],
        // }

        // nav: [
        //     // { text: '简介', link: '/', activeMatch: '/guide/' },
        //     {text: '临床检验基础', link: '/guide/clinical/'},
        //     {text: '临床生化检验',  items: [
        //             { text: '一 血液样本采集和血涂片制备', link: '/guide/clinical/Blood' },
        //             { text: '二、红细胞检查', link: '/guide/clinical/ErythrocyteTest' },
        //             { text: '三、白细胞检查', link: '/guide/clinical/Leucocyte' },
        //             { text: '四、血液分析仪及其临床应用', link: '/guide/clinical/BloodAnalyzer' },
        //             { text: '五、血型和输血', link: '/guide/clinical/BloodType ' },
        //             { text: '六、尿液生成和标本采集及处理', link: '/guide/clinical/UrineSource' },
        //             { text: '七、尿理学检验', link: '/guide/clinical/UrineTest' },
        //             {text: '八、尿有形成分检查', link: '/guide/clinical/UrineCompositionExamination'},
        //             { text: '九、尿液化学检查', link: '/guide/clinical/UrineChemistry' },
        //             { text: '十、尿液分析仪及其临床应用', link: '/guide/clinical/UrineAnalyzer' },
        //             { text: '十一、粪便检验', link: '/guide/clinical/StoolTest' },
        //             { text: '十二、脑脊液检验', link: '/guide/clinical/CerebrospinalFluidTests' },
        //             { text: '十三、浆膜腔积液检验', link: '/guide/clinical/SerousCavityEffusion' },
        //             { text: '十四、精液检查', link: '/guide/clinical/SemenTest' },
        //             { text: '十五、前列腺液检查', link: '/guide/clinical/ProstaticFluid' },
        //             { text: '十六、阴道分泌物检查', link: '/guide/clinical/VaginalDischarge' },
        //             { text: '十七、羊水检查', link: '/guide/clinical/AmnioticFluid' },
        //             {text: '十八、痰及支气管肺泡灌洗液检查', link: '/guide/clinical/SputumBronchoalveolarLavageFluid'},
        //             { text: '十九、胃液和十二指肠引流液检验', link: '/guide/clinical/GastricJuice' },
        //             { text: '二十、脱落细胞检查', link: '/guide/clinical/ExfoliatedCell' }
        //         ]},
        //     {text: '血液学检验', link: '/guide/blood/'},
        //     {text: '微生物检验', link: '/guide/microorganism/', activeMatch: '^/guide/microorganism/' },
        //     {text: '免疫学检验', link: '/guide/immune/', activeMatch: '^/guide/immune/' },
        //     {text: "医学检验",
        //         items: [
        //             { text: '一 血液样本采集和血涂片制备', link: '/guide/clinical/1/1.1' },
        //             { text: '二、红细胞检查', link: '/guide/clinical/1/1.2' },
        //             { text: '三、白细胞检查', link: '/guide/clinical/1/1.3' },
        //             { text: '四、血液分析仪及其临床应用', link: '/guide/clinical/1/1.4' },
        //             { text: '五、血型和输血', link: '/guide/clinical/1/1.5' },
        //             { text: '六、尿液生成和标本采集及处理', link: '/guide/clinical/1/1.6' },
        //             { text: '六、尿液生成和标本采集及处理', link: '/guide/clinical/1/1.7' }
        //         ],
        //     },
        //
        // ],


    }
})
