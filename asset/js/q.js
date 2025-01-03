const questions = [
    {
        name: "", 
        initB: [[0, 1], [1, 1], [2, 2], [2, 3], [4, 2], [4, 3], [5, 0]],
        initW: [[0, 2], [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 1], [5, 2], [5, 3], [5, 4], [6, 1], [7, 1]],
        firstToPlay: "white", gridSizeX: 9, gridSizeY: 7,
        moves: {
            "1,0": [[3, 3], {"3,0": [[4, 1], {"4,0": [[2, 0], {"3,1": [null, null, "正解。Correct."]}]}]}],
            "2,0": [[4, 1], {}, "失败。Wrong."],
            "3,0": [[3, 1], {"1,0": [[2, 0], {"2,1": [[4, 0], {"4,1": [[2, 0], null, "失败。Wrong."]}]}]}],
            "3,3": [[3, 1], {"2,0": [[1, 0], {"3,0": [[4, 1], null, "失败。Wrong."]}]}]
        }
    },
    {
        name: "", 
        initB: [[1, 1], [1, 2], [4, 2], [5, 2], [6, 0], [6, 1]],
        initW: [[0, 2], [1, 3], [2, 3], [2, 4], [4, 3], [4, 4], [5, 3], [6, 3], [7, 0], [7, 1], [7, 2], [7, 3]],
        firstToPlay: "white", gridSizeX: 9, gridSizeY: 6,
        moves: {
            "6,2": [[4, 1], {
                "3,2": [[3, 1], {"4,0": [[3, 0], {"5,0": [[5, 1], {"1,0": [null, null, "正解。Correct."]}]}]}],
                "4,0": [[3, 0], {
                    "3,2": [[3, 1], {"5,0": [[5, 1], {"1,0": [null, null, "正解。Correct."]}]}],
                    "5,0": [[5, 1], {"3,2": [[3, 1], {"1,0": [null, null, "正解。Correct."]}]}]}]}],
            "0,1": [[3, 1], {"1,0": [[2, 0], {"4,0": [[2, 2], {"3,0": [[0, 0], null, "打劫，失败。Ko, wrong."]}]}]}],
            "3,1": [[3, 2], {"4,1": [[2, 2], {"0,1": [[4, 0], {"3,0": [[5, 1], null, "打劫，失败。Ko, wrong."]}]}]}]
        }
    },
    {
        name: "", 
        initB: [[3, 0], [3, 1], [3, 2], [2, 2], [2, 3], [2, 4], [2, 5], [1, 6], [0, 6]],
        initW: [[2, 0], [2, 1], [1, 2], [4, 0], [4, 1], [4, 2], [3, 3], [3, 4], [3, 5], [3, 6], [0, 7], [1, 7], [2, 7], [3, 8]],
        firstToPlay: "white", gridSizeX: 6, gridSizeY: 10,
        moves: {
            "1,1": [[1, 3], {"0,4": [[0, 2], {"0,3": [[0, 5], {
                        "1,4": [[1, 5], {"0,3": [[0, 4], {"0,1": [[1, 0], {"0,3": [null, null, "缓一气劫，正解。One-move approach ko, correct."]}]}]}],
                        "0,1": [[1, 4], {"2,6": [[0, 2], {"0,3": [null, null, "双活，失败。Seki, wrong."]}]}]}]}]}]
        }
    },
    {
        name: "", 
        initB: [[0, 1], [2, 1], [0, 4], [0, 5], [1, 5], [2, 5], [3, 5]],
        initW: [[0, 6], [1, 6], [2, 6], [3, 6], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6]],
        firstToPlay: "white", gridSizeX: 6, gridSizeY: 8,
        moves: {
            "2,0": [[1, 2],{
                "1,0": [[3, 1], {
                    "2,2": [[3, 2], {
                        "3,3": [[1, 1], {
                            "1,3": [[2, 3], {
                                "2,4": [[1, 4], {
                                    "2,2" : [null, null, "正解。Correct."]
                                }]
                            }]
                        }]
                    }],
                    "3,0": [[1, 3], {
                        "1,1": [[0, 2], {
                            "2,4": [[3, 4], {
                                "2,3": [[3, 3], null, "失败。Wrong."]
                            }]
                        }]
                    }]
                }]
            }],
            "1,0": [[1, 3], {
                "2,0": [[1, 1], null, "失败。Wrong."]
            }],
            "1,2": [[2, 2], {
                "2,3": [[1, 3], {
                    "2,4": [[1, 0], null, "失败。Wrong."],
                    "1,0": [[0, 2], {
                        "2,4": [[1, 4], null, "失败。Wrong."]
                    }]
                }]
            }],
            "1,3": [[2, 3], {
                "2,4": [[1, 2], {
                    "1,0": [[0, 3], null, "失败。Wrong."]
                }],
                "1,2": [[2, 2], {
                    "1,1": [[1, 0], {
                        "0,2": [[2, 4], {
                            "0,0": [[2, 0], null, "黑净活，失败。Black alive, wrong."]
                        }]
                    }]
                }]
            }],
            "2,2": [[1, 2], {
                "2,0": [[1, 3], {
                    "2,4": [[1, 0], null, "失败。Wrong."]
                }],
                "1,0": [[1, 3], null, "失败。Wrong."]
            }],
            "2,3": [[1, 3], {
                "1,2": [[2, 2], {
                    "2,4": [[1, 0], null, "失败。Wrong."]
                }]
            }]
        }
    },
    {
        name: "", firstToPlay: "white", gridSizeX: 7, gridSizeY: 8,
        initB: [[1, 3], [2, 3], [4, 0], [4, 1], [4, 2], [4, 3]],
        initW: [[5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [1, 4], [2, 4], [3, 4], [4, 4], [1, 6]],
        moves: {
            "0,1": [[2, 1], {
                "0,3": [[1, 2], {
                    "3,2": [[0, 2], {
                        "3,3": [[3, 1], {
                            "1,1": [[2, 2], {
                                "2,0": [[0, 4], {
                                    "1,0": [null, null, "正解。Correct."]
                                }],
                                "1,0": [[0, 4], {
                                    "2,0": [null, null, "正解。Correct."]
                                }]
                            }]
                        }]
                    }],
                    "3,3": [[1, 1], {
                        "3,2": [[0, 0], {
                            "1,0": [[0, 2], {
                                "2,0": [[3, 1], null, "失败。Wrong."]
                            }]
                        }]
                    }]
                }]
            }],
            "3,3": [[2, 2], {
                "3,2": [[1, 1], {
                    "0,3": [[3, 1], {
                        "0,1": [[0, 2], null, "失败。Wrong."]
                    }]
                }]
            }],
            "1,1": [[0, 1], {
                "0,2": [[1, 2], {
                    "0,0": [[0, 3], {
                        "1,2": [[3, 3], {
                            "2,0": [[0, 1], null, "失败。Wrong."]
                        }]
                    }]
                }]
            }],
            "0,3": [[0, 2], {
                "3,3": [[2, 2], {
                    "2,1": [[1, 1], {
                        "3,2": [[0, 4], {
                            "1,0": [[2, 0], {
                                "3,0": [[0, 0], null, "失败。Wrong."]
                            }]
                        }]
                    }]
                }],
                "1,1": [[3, 3], {
                    "0,1": [[1, 2], {
                        "2,1": [[3, 1], {
                            "2,2": [[2, 0], {
                                "1,0": [[0, 4], null, "失败。Wrong."]
                            }]
                        }]
                    }]
                }]
            }]
        }
    },
    {
        name: "", firstToPlay: "white", gridSizeX: 8, gridSizeY: 8,
        initB: [[3, 0], [3, 1], [3, 2], [3, 3], [2, 3], [1, 3]],
        initW: [[1, 1], [1, 5], [2, 0], [2, 1], [2, 5], [3, 5], [4, 0], [4, 1], [4, 3], [4, 5], [5, 1], [5, 3], [5, 5]],
        moves: {
            "0,4": [[0, 3], {
                "0,1": [null, null, "正解。Correct."],
                "0,2": [[0, 0], null, "失败。Wrong."]
            }],
            "1,0": [[0, 1], {
                "0,3": [[0, 4], {
                    "1,4": [[0, 2], null, "双活，失败。Seki, wrong."]
                }]
            }],
            "0,1": [[1, 0], {
                "0,4": [[0, 2], null, "失败。Wrong."],
                "0,3": [[0, 4], {
                    "1,2": [[1, 4], null, "缓一气劫，失败。One-move approach ko, wrong."]
                }]
            }],
            "0,2": [[1, 2], {
                "0,3": [[0, 4], {
                    "1,4": [[0, 1], {
                        "0,0": [[1, 0], null, "失败。Wrong."],
                    }],
                    "0,0": [[0, 1], {
                        "0,2": [[0, 3], null, "失败。Wrong."]
                    }]
                }],
                "0,0": [[0, 3], null, "失败。Wrong."]
            }],
            "0,3": [[0, 4], {
                "1,4": [[0, 1], {
                    "0,5": [[0, 2], {
                        "1,0": [[0, 4], null, "紧气劫，失败。Approach ko, wrong."]
                    }]
                }]
            }],
            "1,4": [[0, 1], {
                "0,3": [[0, 2], {
                    "0,0": [[1, 0], null, "万年劫，失败。Ten thousand year ko, wrong."]
                }]
            }]
        }
    }
]