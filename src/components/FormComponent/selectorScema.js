
const schema = {
    WorkerLevel:{
        endPoint:"WorkerLevel",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.idd,
                    name:e.name
                }
            })
        } 
    },
    fisherway:{
        endPoint:"Fisherway",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.id,
                    name:e.name
                }
            })
        } 
    },
    fishKind:{
        endPoint:"fishKind",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.id,
                    name:e.name
                }
            })
        } 
    },
    boatdegre:{
        endPoint:"BoatDegre",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.id,
                    name:e.name
                }
            })
        } 
    },
    boatType:{
        endPoint:"BoatType",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.id,
                    name:e.name
                }
            })
        } 
    },
    lake:{
        endPoint:"lake/GetLakeByGovId/", 
        config:{
        },
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.id,
                    name:e.name
                }
            })
        }
    },
    FarmGov:{
        endPoint:"Farm/GetFarmByGovId/", 
        config:{
        },
        parser:(data)=>{
            return data.map(e=>{
                return {
                    // key:"F"+(e.markaz.governorateId).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+"."+(e.serial).toLocaleString('en-US', {minimumIntegerDigits: 6, useGrouping:false}),
                    key:e.id,
                    name:e.code
                    //name:e.code
                }
            })
        }
    },
    fisherDesk:{
        endPoint:"FisherDesk/getbyGovid/",
        config:{
        },
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.id,
                    name:e.name
                }
            })
        }
    },
    WaterSource:{
        endPoint:"WaterSource", 
        config:{
        },
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.id,
                    name:e.name
                }
            })
        }
    },
    WaterType:{
        endPoint:"WaterType", 
        config:{
        },
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.id,
                    name:e.name
                }
            })
        }
    },
    plantlt:{
        endPoint:"plantlt", 
        config:{
        },
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.plantId,
                    name:e.plantName
                }
            })
        }
    },
    location:{
        endPoint:"Location", 
        config:{
        },
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.id,
                    name:e.name
                }
            })
        }
    },
    soiltypelt:{
        endPoint:"SoilType", 
        config:{
        },
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.id,
                    name:e.name
                }
            })
        }
    },
    WindDirection:{
        endPoint:"WindDirection", 
        config:{
        },
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.id,
                    name:e.name
                }
            })
        }
    },
    gafard:{
        endPoint:"Region/GetByGovId/", 
        config:{
        },
        parser:(data)=>{
            return {
                    key:data.id,
                    name:data.name
                }
        }
    },
    age:{
        endPoint:"age",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.id,
                    name:e.name
                }
            })
        } 
    },
    FarmJobType:{
        endPoint:"FarmJobType",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.id,
                    name:e.name
                }
            })
        } 
    },
    gov:{
        endPoint:"Governorate", 
        config:{
        },
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.id,
                    name:e.name                    
                }
            })
        }
    }, 
    markaz:{
        endPoint:"Markaz/GetByGovId/",
        config:{
        },
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.id,
                    name:e.name
                }
            })
        }
    },
    job:{
        endPoint:"users",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.uJobId,
                    name:e.uJobName
                }
            })
        } 
    },
    boatmaterial:{
        endPoint:"boatmateriallt",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.boatMaterialId,
                    name:e.boatMaterialName
                }
            })
        } 
    },
    associationgov:{
        endPoint:"association-gov/",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.assId,
                    name:e.assName
                }
            })
        } 
    },
    fisherway12:{
        endPoint:"Fisherway",
        config:{},
        parser:(data)=>{
            return data.filter(e=> e.fisherwayType==1||e.fisherwayType==3).map(e=>{
                return {
                    key:e.fisherwayId,
                    name:e.fisherwayName
                }
            })
        } 
    },
    portchoicelt:{
        endPoint:"portchoicelt",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.pchId,
                    name:e.pchName
                }
            })
        } 
    },
    porttypelt:{
        endPoint:"porttypelt",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.portTypeId,
                    name:e.portTypeName
                }
            })
        } 
    },
    port:{
        endPoint:"port",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.portId,
                    name:e.portName
                }
            })
        } 
    },
    boatmateriallt:{
        endPoint:"boatmateriallt",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.boatMaterialId,
                    name:e.boatMaterialName
                }
            })
        } 
    },
    boattypelt:{
        endPoint:"boattypelt",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.boatTypelId,
                    name:e.boatTypeName
                }
            })
        } 
    },
    species:{
        endPoint:"Species",
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.bspeciesId,
                    name:e.speciesName
                }
            })
        } 
    }
}

export default schema