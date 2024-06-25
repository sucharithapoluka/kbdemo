import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { SampleLotsData } from "../constants/AppConstants";
import { DropdownData } from "../models/DropdownData";
import Dropdown from "./DropdownComponent";
import { CompanyData, LotData, LotDataType, LotSelectProps, LotSelectType, ProjectData, TractData } from "../models/LotsData";
import { AppTheme } from "../styles/AppTheme";
import { CommonStyles } from "../styles/Common";

const LotSelect: FC<LotSelectProps> = (lotSelectProps: LotSelectProps) => {
    const [projectsData, setProjectsData] = useState([] as DropdownData[] | null);
    const [tractsData, setTractsData] = useState([] as DropdownData[] | null);
    const [lotsData, setLotsData] = useState([] as DropdownData[] | null);
    const [selectedLot, setSelectedLot] = useState('');
    const [companiesData] = useState(() => {
        return SampleLotsData.map(companyItem => ({
            label: companyItem.companyCode.trim(),
            value: companyItem.companyCode,
        }) as DropdownData)
    });
    const buttonText = lotSelectProps.lotSelectType == LotSelectType.photos ? "Add Photos" : "Create Message";

    useEffect(() => {
        if (lotSelectProps && lotSelectProps.userLotSelectedData) {
            if (lotSelectProps.userLotSelectedData.projectsData) {
                setProjectsData(lotSelectProps.userLotSelectedData.projectsData);
            }

            if (lotSelectProps.userLotSelectedData.tractsData) {
                setTractsData(lotSelectProps.userLotSelectedData.tractsData);
            }

            if (lotSelectProps.userLotSelectedData.lotsData) {
                setLotsData(lotSelectProps.userLotSelectedData.lotsData);
            }

            if (lotSelectProps.userLotSelectedData.lot) {
                setSelectedLot(lotSelectProps.userLotSelectedData.lot);
            }
        }
    }, [lotSelectProps])

    const resetDropdownValues = (lotDataTye: LotDataType) => {
        switch (lotDataTye) {
            case LotDataType.All:
            case LotDataType.CompanyCode:
                setProjectsData(null);
                setLotsData(null);
                setTractsData(null);
                setSelectedLot('');
                lotSelectProps.userLotSelectedData.projectsData = null;
                lotSelectProps.userLotSelectedData.tractsData = null;
                lotSelectProps.userLotSelectedData.lotsData = null;
                lotSelectProps.userLotSelectedData.selectedCompanyData = null;
                lotSelectProps.userLotSelectedData.selectedProjectData = null;
                lotSelectProps.userLotSelectedData.selectedTractData = null;
                lotSelectProps.userLotSelectedData.selectedLotData = null;
                lotSelectProps.userLotSelectedData.companyCode = null;
                lotSelectProps.userLotSelectedData.projectCode = null;
                lotSelectProps.userLotSelectedData.tract = null;
                lotSelectProps.userLotSelectedData.lot = null;
                break;
            case LotDataType.ProjectCode:
                setLotsData(null);
                setTractsData(null);
                setSelectedLot('');
                lotSelectProps.userLotSelectedData.tractsData = null;
                lotSelectProps.userLotSelectedData.lotsData = null;
                lotSelectProps.userLotSelectedData.selectedProjectData = null;
                lotSelectProps.userLotSelectedData.selectedTractData = null;
                lotSelectProps.userLotSelectedData.selectedLotData = null;
                lotSelectProps.userLotSelectedData.projectCode = null;
                lotSelectProps.userLotSelectedData.tract = null;
                lotSelectProps.userLotSelectedData.lot = null;
                break;
            case LotDataType.Tract:
                setLotsData(null);
                setTractsData(null);
                setSelectedLot('');
                lotSelectProps.userLotSelectedData.tractsData = null;
                lotSelectProps.userLotSelectedData.lotsData = null;
                lotSelectProps.userLotSelectedData.selectedTractData = null;
                lotSelectProps.userLotSelectedData.selectedLotData = null;
                lotSelectProps.userLotSelectedData.tract = null;
                lotSelectProps.userLotSelectedData.lot = null;
            case LotDataType.Lot:
                setLotsData(null);
                setSelectedLot('');
                lotSelectProps.userLotSelectedData.lotsData = null;
                lotSelectProps.userLotSelectedData.selectedLotData = null;
                lotSelectProps.userLotSelectedData.lot = null;
            default:
                break;
        }
    }

    const onCompanySelect = (companyCode: string) => {
        try {
            if (companyCode && companyCode != lotSelectProps.userLotSelectedData.companyCode) {
                resetDropdownValues(LotDataType.ProjectCode);
                lotSelectProps.userLotSelectedData.companyCode = companyCode;
                let companyData: CompanyData | undefined = SampleLotsData
                    .find(x => x.companyCode === companyCode);

                if (companyData != undefined) {
                    lotSelectProps.userLotSelectedData.selectedCompanyData = companyData;
                    let projects = companyData.projects.map(projectItem => ({
                        label: projectItem.projectCode.trim(),
                        value: projectItem.projectCode,
                    }) as DropdownData);
                    setProjectsData(projects);
                    lotSelectProps.userLotSelectedData.projectsData = projects;
                }
            }
        }
        catch (error) {
            console.log("Unable to get projects data");
        }
    }

    const onProjectSelect = (projectCode: string) => {
        try {
            if (projectCode && projectCode != lotSelectProps.userLotSelectedData.projectCode) {
                resetDropdownValues(LotDataType.Tract);
                lotSelectProps.userLotSelectedData.projectCode = projectCode;
                let projectData: ProjectData | undefined = lotSelectProps.userLotSelectedData.selectedCompanyData ?
                    lotSelectProps.userLotSelectedData.selectedCompanyData.projects
                        .find(x => x.projectCode === projectCode) : undefined;

                if (projectData != undefined) {
                    lotSelectProps.userLotSelectedData.selectedProjectData = projectData;
                    let tracts = projectData.tracts.map(projectItem => ({
                        label: projectItem.tract.trim(),
                        value: projectItem.tract,
                    }) as DropdownData);
                    setTractsData(tracts);
                    lotSelectProps.userLotSelectedData.tractsData = tracts;
                }
            }
        }
        catch (error) {
            console.log("Unable to get tracts data");
        }
    }

    const onTractSelect = (tract: string) => {
        try {
            if (tract && tract != lotSelectProps.userLotSelectedData.tract) {
                resetDropdownValues(LotDataType.Lot);
                lotSelectProps.userLotSelectedData.tract = tract;
                let tractData: TractData | undefined = lotSelectProps.userLotSelectedData.selectedProjectData ?
                    lotSelectProps.userLotSelectedData.selectedProjectData.tracts
                        .find(x => x.tract === tract) : undefined;

                if (tractData != undefined) {
                    lotSelectProps.userLotSelectedData.selectedTractData = tractData;
                    let lots = tractData.lots.map(lotItem => ({
                        label: `${lotItem.lot.trim()} - ${lotItem.userName}`,
                        value: lotItem.lot,
                    }) as DropdownData);
                    setLotsData(lots);
                    lotSelectProps.userLotSelectedData.lotsData = lots;
                }
            }
        }
        catch (error) {
            console.log("Unable to get tracts data");
        }
    }

    const onLotSelect = (lot: string) => {
        try {
            if (lot && lot != lotSelectProps.userLotSelectedData.lot) {
                lotSelectProps.userLotSelectedData.lot = lot;
                let lotData: LotData | undefined = lotSelectProps.userLotSelectedData.selectedTractData ?
                    lotSelectProps.userLotSelectedData.selectedTractData.lots
                        .find(x => x.lot === lot) : undefined;

                if (lotData != undefined) {
                    lotSelectProps.userLotSelectedData.selectedLotData = lotData;
                    lotSelectProps.userLotSelectedData.lot = lot;
                    setSelectedLot(lot);
                }
            }
        }
        catch (error) {
            console.log("Unable to get lots data");
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={CommonStyles.card}>
                    <View style={styles.lotSelectContainer}>
                        <View>
                            {lotSelectProps.userLotSelectedData.companyCode && (
                                <TouchableOpacity style={styles.clearAllContainer} onPress={() => resetDropdownValues(LotDataType.All)}>
                                    <Text style={styles.clearAllText}>
                                        Clear All
                                    </Text>
                                </TouchableOpacity>
                            )}
                            <Dropdown
                                data={companiesData}
                                label="Select a Company"
                                placeholder="Companies"
                                value={lotSelectProps.userLotSelectedData.companyCode}
                                onSelect={item => onCompanySelect(item.value)}
                                enableSearch={false} />
                        </View>

                        {lotSelectProps.userLotSelectedData.companyCode && (
                            <Dropdown
                                data={projectsData}
                                label="Select a Project"
                                placeholder="Projects"
                                value={lotSelectProps.userLotSelectedData.projectCode}
                                onSelect={item => onProjectSelect(item.value)}
                                enableSearch={false} />
                        )}

                        {lotSelectProps.userLotSelectedData.projectCode && (
                            <Dropdown
                                data={tractsData}
                                label="Select a Tract"
                                placeholder="Tracts"
                                value={lotSelectProps.userLotSelectedData.tract}
                                onSelect={item => onTractSelect(item.value)}
                                enableSearch={false} />
                        )}

                        {lotSelectProps.userLotSelectedData.tract && (
                            <Dropdown
                                data={lotsData}
                                label="Select a Lot"
                                placeholder="Lots"
                                value={lotSelectProps.userLotSelectedData.lot}
                                onSelect={item => onLotSelect(item.value)}
                                enableSearch={false} />
                        )}

                        {selectedLot && lotSelectProps.userLotSelectedData.selectedLotData && (
                            <View>
                                <Text style={styles.label}>Address</Text>
                                <Text style={styles.AddressText}>{lotSelectProps.userLotSelectedData.selectedLotData.address}</Text>
                            </View>
                        )}
                    </View>
                </View>
            </ScrollView>

            {selectedLot &&
                <View style={CommonStyles.buttonCard}>
                    <TouchableOpacity style={styles.button} onPress={lotSelectProps.onPress}>
                        <Text style={styles.buttonText}>{buttonText}</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

export default LotSelect;

const styles = StyleSheet.create({
    lotScrollView: {
        flex: 1,
    },
    lotSelectContainer: {
        paddingHorizontal: 15,
        paddingBottom: 15,
        paddingTop: 0,
        backgroundColor: AppTheme.colors.surface,
    },
    label: {
        color: AppTheme.colors.black,
        marginVertical: 12,
        fontWeight: "bold",
        fontSize: 15,
    },
    AddressText: {
        color: AppTheme.colors.black,
    },
    clearAllContainer: {
        position: 'absolute',
        right: 0,
        top: 15,
        zIndex: 1
    },
    clearAllText: {
        color: AppTheme.colors.link_Color,
        textDecorationLine: "underline",
    },
    button: {
        backgroundColor: AppTheme.colors.primary,
        padding: "3%",
        borderRadius: 5,
        marginTop: 2
    },
    buttonText: {
        color: AppTheme.colors.black,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 17,
    }
});