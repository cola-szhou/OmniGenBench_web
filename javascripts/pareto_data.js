// This file contains the data for the Multi-Benchmark Model Efficiency Analysis chart.

const paramsData = [
    ["DNABERT-2", 110],  ["HyenaDNA", 47], ["Caduceus", 1.9], ["NT-V2", 89],
    ["AgroNT", 985], ["SpliceBERT", 19], ["3UTRBERT", 86], ["RNA-BERT", 0.5], ["RNABERT", 0.5],
    ["RNA-MSM", 95], ["RNA-FM", 97], ["MP-RNA", 186], ["OmniGenome", 186]
];

const pgbData = [
    { model: "DNABERT-2", PolyA_F1: 41.35, LncRNA_F1: 72.55, ChromAcc_F1: 61.49, PromStr_RMSE: 0.99, TermStr_RMSE: 0.24, Splice_F1: 45.34, GeneExp_RMSE: 14.78, Enhancer_F1: 36.40 },
    { model: "HyenaDNA", PolyA_F1: 83.11, LncRNA_F1: 58.21, ChromAcc_F1: 52.20, PromStr_RMSE: 0.88, TermStr_RMSE: 0.26, Splice_F1: 90.28, GeneExp_RMSE: 14.79, Enhancer_F1: 66.17 },
    { model: "Caduceus", PolyA_F1: 70.89, LncRNA_F1: 68.40, ChromAcc_F1: 64.53, PromStr_RMSE: 0.91, TermStr_RMSE: 0.26, Splice_F1: 78.51, GeneExp_RMSE: 14.72, Enhancer_F1: 60.83 },
    { model: "NT-V2", PolyA_F1: 71.26, LncRNA_F1: 73.08, ChromAcc_F1: 65.71, PromStr_RMSE: 0.81, TermStr_RMSE: 0.27, Splice_F1: 95.05, GeneExp_RMSE: 14.79, Enhancer_F1: 73.89 },
    { model: "AgroNT", PolyA_F1: 78.89, LncRNA_F1: 67.24, ChromAcc_F1: 63.27, PromStr_RMSE: 0.94, TermStr_RMSE: 0.78, Splice_F1: 88.45, GeneExp_RMSE: 15.56, Enhancer_F1: 62.83 },
    { model: "SpliceBERT", PolyA_F1: 65.23, LncRNA_F1: 71.88, ChromAcc_F1: 63.62, PromStr_RMSE: 0.75, TermStr_RMSE: 0.22, Splice_F1: 96.45, GeneExp_RMSE: 14.70, Enhancer_F1: 69.71 },
    { model: "3UTRBERT", PolyA_F1: 76.48, LncRNA_F1: 70.75, ChromAcc_F1: 63.71, PromStr_RMSE: 1.04, TermStr_RMSE: 0.36, Splice_F1: 94.44, GeneExp_RMSE: 14.87, Enhancer_F1: 71.67 },
    { model: "RNA-BERT", PolyA_F1: 78.54, LncRNA_F1: 61.99, ChromAcc_F1: 48.94, PromStr_RMSE: 1.81, TermStr_RMSE: 0.38, Splice_F1: 94.45, GeneExp_RMSE: 14.89, Enhancer_F1: 57.61 },
    { model: "RNA-MSM", PolyA_F1: 84.25, LncRNA_F1: 67.49, ChromAcc_F1: 53.52, PromStr_RMSE: 1.28, TermStr_RMSE: 0.28, Splice_F1: 95.49, GeneExp_RMSE: 14.87, Enhancer_F1: 61.45 },
    { model: "RNA-FM", PolyA_F1: 84.94, LncRNA_F1: 68.75, ChromAcc_F1: 54.92, PromStr_RMSE: 0.95, TermStr_RMSE: 0.27, Splice_F1: 95.95, GeneExp_RMSE: 14.83, Enhancer_F1: 57.14 },
    { model: "MP-RNA", PolyA_F1: 85.12, LncRNA_F1: 76.62, ChromAcc_F1: 65.86, PromStr_RMSE: 0.61, TermStr_RMSE: 0.21, Splice_F1: 95.82, GeneExp_RMSE: 14.77, Enhancer_F1: 79.55 },
    { model: "OmniGenome", PolyA_F1: 87.55, LncRNA_F1: 77.96, ChromAcc_F1: 67.69, PromStr_RMSE: 0.59, TermStr_RMSE: 0.18, Splice_F1: 98.41, GeneExp_RMSE: 14.71, Enhancer_F1: 79.77 }
];

const gueData = [
    { model: "DNABERT-2", YeastEMP_F1: 75.85, MouseTFM_F1: 86.23, VirusCVC_F1: 58.23, HumanTFH_F1: 81.80, HumanPD_F1: 90.17, HumanCPD_F1: 82.57, HumanSPSP_F1: 85.21 },
    { model: "HyenaDNA", YeastEMP_F1: 73.08, MouseTFM_F1: 73.44, VirusCVC_F1: 27.59, HumanTFH_F1: 77.62, HumanPD_F1: 91.19, HumanCPD_F1: 84.31, HumanSPSP_F1: 83.34 },
    { model: "Caduceus", YeastEMP_F1: 73.49, MouseTFM_F1: 78.18, VirusCVC_F1: 27.49, HumanTFH_F1: 79.56, HumanPD_F1: 89.13, HumanCPD_F1: 85.09, HumanSPSP_F1: 81.82 },
    { model: "NT-V2", YeastEMP_F1: 74.93, MouseTFM_F1: 78.10, VirusCVC_F1: 32.71, HumanTFH_F1: 79.12, HumanPD_F1: 90.87, HumanCPD_F1: 84.70, HumanSPSP_F1: 84.13 },
    { model: "SpliceBERT", YeastEMP_F1: 77.66, MouseTFM_F1: 84.97, VirusCVC_F1: 47.17, HumanTFH_F1: 82.77, HumanPD_F1: 92.24, HumanCPD_F1: 83.96, HumanSPSP_F1: 93.81 },
    { model: "3UTRBERT", YeastEMP_F1: 71.89, MouseTFM_F1: 71.46, VirusCVC_F1: 34.84, HumanTFH_F1: 74.85, HumanPD_F1: 82.37, HumanCPD_F1: 90.51, HumanSPSP_F1: 81.95 },
    { model: "RNA-BERT", YeastEMP_F1: 60.14, MouseTFM_F1: 59.83, VirusCVC_F1: 21.08, HumanTFH_F1: 67.48, HumanPD_F1: 79.87, HumanCPD_F1: 76.25, HumanSPSP_F1: 44.75 },
    { model: "RNA-MSM", YeastEMP_F1: 64.99, MouseTFM_F1: 79.15, VirusCVC_F1: 51.81, HumanTFH_F1: 78.72, HumanPD_F1: 91.28, HumanCPD_F1: 85.42, HumanSPSP_F1: 84.24 },
    { model: "RNA-FM", YeastEMP_F1: 74.41, MouseTFM_F1: 78.24, VirusCVC_F1: 52.22, HumanTFH_F1: 79.27, HumanPD_F1: 92.18, HumanCPD_F1: 86.05, HumanSPSP_F1: 84.76 },
    { model: "MP-RNA", YeastEMP_F1: 78.21, MouseTFM_F1: 63.81, VirusCVC_F1: 60.48, HumanTFH_F1: 81.38, HumanPD_F1: 90.18, HumanCPD_F1: 85.09, HumanSPSP_F1: 81.69 },
    { model: "OmniGenome", YeastEMP_F1: 78.51, MouseTFM_F1: 84.72, VirusCVC_F1: 64.41, HumanTFH_F1: 81.73, HumanPD_F1: 90.04, HumanCPD_F1: 85.22, HumanSPSP_F1: 90.39 },
    { model: "AgroNT", YeastEMP_F1: 76.50, MouseTFM_F1: 80.00, VirusCVC_F1: 35.00, HumanTFH_F1: 80.50, HumanPD_F1: 91.00, HumanCPD_F1: 85.00, HumanSPSP_F1: 85.50 }
];

const gbData = [
    { model: "DNABERT-2", DEM_F1: 92.67, DOW_F1: 95.17, DRE_F1: 43.77, DME_F1: 77.21, HCE_F1: 75.58, HEE_F1: 80.66, HRE_F1: 78.14, HNP_F1: 85.80, HOR_F1: 68.03 },
    { model: "HyenaDNA", DEM_F1: 88.21, DOW_F1: 94.13, DRE_F1: 70.11, DME_F1: 76.44, HCE_F1: 70.38, HEE_F1: 79.58, HRE_F1: 96.33, HNP_F1: 85.99, HOR_F1: 67.03 },
    { model: "Caduceus", DEM_F1: 92.13, DOW_F1: 94.74, DRE_F1: 72.03, DME_F1: 75.61, HCE_F1: 70.20, HEE_F1: 76.47, HRE_F1: 79.16, HNP_F1: 84.36, HOR_F1: 63.17 },
    { model: "NT-V2", DEM_F1: 91.66, DOW_F1: 94.32, DRE_F1: 78.20, DME_F1: 81.72, HCE_F1: 71.98, HEE_F1: 79.85, HRE_F1: 93.30, HNP_F1: 85.30, HOR_F1: 68.53 },
    { model: "SpliceBERT", DEM_F1: 94.72, DOW_F1: 96.42, DRE_F1: 72.29, DME_F1: 74.70, HCE_F1: 73.50, HEE_F1: 79.60, HRE_F1: 95.23, HNP_F1: 89.57, HOR_F1: 68.89 },
    { model: "3UTRBERT", DEM_F1: 89.50, DOW_F1: 90.22, DRE_F1: 74.35, DME_F1: 80.14, HCE_F1: 70.23, HEE_F1: 76.33, HRE_F1: 98.47, HNP_F1: 82.49, HOR_F1: 66.78 },
    { model: "RNA-BERT", DEM_F1: 76.56, DOW_F1: 62.17, DRE_F1: 50.11, DME_F1: 60.79, HCE_F1: 66.69, HEE_F1: 63.29, HRE_F1: 46.57, HNP_F1: 73.80, HOR_F1: 56.59 },
    { model: "RNA-MSM", DEM_F1: 79.38, DOW_F1: 93.71, DRE_F1: 54.13, DME_F1: 75.90, HCE_F1: 69.79, HEE_F1: 78.07, HRE_F1: 94.87, HNP_F1: 84.28, HOR_F1: 63.93 },
    { model: "RNA-FM", DEM_F1: 91.53, DOW_F1: 95.49, DRE_F1: 74.77, DME_F1: 79.74, HCE_F1: 71.62, HEE_F1: 80.03, HRE_F1: 95.72, HNP_F1: 87.14, HOR_F1: 69.38 },
    { model: "MP-RNA", DEM_F1: 93.46, DOW_F1: 92.72, DRE_F1: 77.08, DME_F1: 79.75, HCE_F1: 72.82, HEE_F1: 81.89, HRE_F1: 95.43, HNP_F1: 87.25, HOR_F1: 65.74 },
    { model: "OmniGenome", DEM_F1: 94.16, DOW_F1: 93.49, DRE_F1: 77.17, DME_F1: 80.34, HCE_F1: 73.51, HEE_F1: 82.23, HRE_F1: 95.66, HNP_F1: 87.87, HOR_F1: 68.97 },
    { model: "AgroNT", DEM_F1: 93.00, DOW_F1: 94.50, DRE_F1: 75.00, DME_F1: 80.50, HCE_F1: 72.00, HEE_F1: 81.00, HRE_F1: 94.00, HNP_F1: 86.00, HOR_F1: 67.50 }
];

const rgbData = [
    { model: "DNABERT-2", mRNA_RMSE: 0.8158, SNMD_AUC: 49.94, SNMR_F1: 15.86, Archive_II_F1: 55.73, Stralign_F1: 64.09, bpRNA_F1: 33.77, EternaV2_Accuracy: 0 },
    { model: "HyenaDNA", mRNA_RMSE: 0.8056, SNMD_AUC: 53.32, SNMR_F1: 39.80, Archive_II_F1: 71.18, Stralign_F1: 91.24, bpRNA_F1: 57.43, EternaV2_Accuracy: 0 },
    { model: "Caduceus", mRNA_RMSE: 0.8026, SNMD_AUC: 57.01, SNMR_F1: 39.59, Archive_II_F1: 74.37, Stralign_F1: 92.28, bpRNA_F1: 59.76, EternaV2_Accuracy: 0 },
    { model: "NT-V2", mRNA_RMSE: 0.7826, SNMD_AUC: 50.49, SNMR_F1: 26.01, Archive_II_F1: 68.36, Stralign_F1: 83.18, bpRNA_F1: 56.95, EternaV2_Accuracy: 0 },
    { model: "AgroNT", mRNA_RMSE: 0.7830, SNMD_AUC: 49.99, SNMR_F1: 26.38, Archive_II_F1: 62.81, Stralign_F1: 72.54, bpRNA_F1: 46.87, EternaV2_Accuracy: 0 },
    { model: "SpliceBERT", mRNA_RMSE: 0.7340, SNMD_AUC: 58.11, SNMR_F1: 46.44, Archive_II_F1: 79.89, Stralign_F1: 93.81, bpRNA_F1: 71.59, EternaV2_Accuracy: 3 },
    { model: "3UTRBERT", mRNA_RMSE: 0.7772, SNMD_AUC: 50.02, SNMR_F1: 24.01, Archive_II_F1: 68.62, Stralign_F1: 88.55, bpRNA_F1: 57.90, EternaV2_Accuracy: 0 },
    { model: "RNABERT", mRNA_RMSE: 0.8087, SNMD_AUC: 51.32, SNMR_F1: 29.14, Archive_II_F1: 24.66, Stralign_F1: 83.68, bpRNA_F1: 47.96, EternaV2_Accuracy: 0 },
    { model: "RNA-MSM", mRNA_RMSE: 0.7321, SNMD_AUC: 57.86, SNMR_F1: 45.22, Archive_II_F1: 68.72, Stralign_F1: 91.15, bpRNA_F1: 64.44, EternaV2_Accuracy: 2 },
    { model: "RNA-FM", mRNA_RMSE: 0.7297, SNMD_AUC: 59.02, SNMR_F1: 42.21, Archive_II_F1: 82.55, Stralign_F1: 95.07, bpRNA_F1: 78.16, EternaV2_Accuracy: 4 },
    { model: "MP-RNA", mRNA_RMSE: 0.7195, SNMD_AUC: 63.67, SNMR_F1: 50.43, Archive_II_F1: 89.32, Stralign_F1: 93.32, bpRNA_F1: 80.89, EternaV2_Accuracy: 18 },
    { model: "OmniGenome", mRNA_RMSE: 0.7121, SNMD_AUC: 64.13, SNMR_F1: 52.44, Archive_II_F1: 91.89, Stralign_F1: 98.21, bpRNA_F1: 83.18, EternaV2_Accuracy: 84 }
];