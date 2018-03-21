var aos = aos || {};

aos.buildingTemplates = {

    "Photovoltaic Panels": {
        "type": "Power Plant",
        "svgCode": "M219.615 401.84h16v88.06h-16v-88.06zm219.94-271.6l21.83-13.18-21.82-13.16 16-19.8-25-4.88 8.25-24.12-25.19 4-.46-25.49-22.28 12.29-9.18-23.8-16.7 19.24-16.78-19.24-9.22 23.8-22.3-12.31-.46 25.49-25.19-4 8.25 24.12-25 4.88 16 19.8-21.83 13.18 21.83 13.14h33.41l29.29 76.34 12-13.76 16.74 19.24 9.17-23.76 22.3 12.31.46-25.49 25.19 4-8.28-24.18 25-4.88zm-254.55 46.31h-91l31 80.85h91zm108.25 0h-91l30.94 80.85h91zm-70.81 97.42h-91l30.94 80.85h91zm108.25 0h-91l30.94 80.85h91zm73.89 111.87h-262.22L50.615 146.2h262.1zm-19.69-15l-43.31-112.87-37.28-97.42H70.785l80.47 210.27h233.68z",
        "constructionCost": [
            {
                "name": "Metal",
                "quantity": 100
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "Energy",
                    "quantity": 50,
                    "to": "storage"
                }
            ]
        },
        "buildOnLand": true,
        "buildOnWater": true
    },
    "Wind Turbines": {
        "type": "Power Plant",
        "svgCode": "M272 16c-32 48-38.97 115.99-38 176 .118 7.3 2.486 17.54 5.086 26.69 5.166-2.36 10.89-3.69 16.914-3.69 3.04 0 6 .346 8.857.982L272 16zm-16 217c-12.81 0-23 10.19-23 23s10.19 23 23 23 23-10.19 23-23-10.19-23-23-23zm40.8 27.033c-.897 9.054-4.776 17.268-10.632 23.643L455.812 389.87c-25.57-51.714-80.964-91.744-133.42-120.91-6.366-3.54-16.386-6.605-25.593-8.927zm-79.896 8.274L40.124 362.12c57.57 3.714 119.937-24.243 171.423-55.09 6.274-3.758 13.95-10.936 20.58-17.77-7.1-5.122-12.522-12.447-15.223-20.953zm55.86 25.07c-5.127 2.32-10.8 3.623-16.764 3.623-5.964 0-11.637-1.302-16.764-3.62L232 496h48l-7.236-202.623z",
        "constructionCost": [
            {
                "name": "Metal",
                "quantity": 100
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "Energy",
                    "quantity": 50,
                    "to": "storage"
                }
            ]
        },
        "buildOnLand": true,
        "buildOnWater": true
    },
    "Fission Reactors": {
        "type": "Power Plant",
        "svgCode": "M13.447 18l4.826 20.656c17.47 32.683 68.819 20.747 94.545-1.635-14.136 38.399-65.72 49.25-95.964 26.354-.794 11.045 1.01 18.688 4.326 23.547 4.729 6.93 13.658 10.949 30.021 11.203l12.475.193-4.12 11.778c-5.347 15.288-4.928 23.375-1.91 28.478 1.975 3.337 6.034 6.533 12.678 9.545 40.193-8.27 83.572-9.067 121.676-9.119 28.214 0 56.41 1.001 79.78 3.033 23.37 2.032 41.025 4.306 52.245 9.916 10.816 5.781 25.574 5.525 36.207 3.994 9.222-1.415 16.325-4.613 21.387-10.853 3.954-4.874 7.015-12.152 7.9-23.31-33.606 4.231-67.935-8.9-76.294-47.872 40.54 37.963 82.92 42.849 131.005 16.412 11.444-6.49 18.25-14.805 20.485-27.605l1.392-7.975 8.079.543c7.79.524 14.336.366 19.814-.267V18h-21.979c-20.534 43.036-74.988 67.68-115.3 21.922 29.23 13.223 71.841 14.87 94.744-21.922H13.447zm270.645 29.957c-7.744 21.146-22.92 44.73-47.414 51.688-26.23 34.754-92.726 38.651-119.86-17.305 20.443 24.144 61.662 34.958 91.328 17.668-27.204-8.009-48.057-46.875-46.736-47.535 0 2.077 41.737 29.713 57.897 29.654 25.989.029 43.257-14.207 64.785-34.17zM494 72.945c-4.196.368-8.676.507-13.467.412-4.623 14.341-14.644 25.372-27.422 32.62-12.914 7.325-28.605 11.249-45.64 13.244-.675 15.828-4.645 28.298-11.873 37.209-8.483 10.457-20.558 15.453-32.637 17.306-12.578 1.93-25.722.924-37.504-.76a236.7 236.7 0 0 0-4.86 21.258C338.19 192.74 359.193 192 380.23 192c21.401 0 42.782.76 60.555 2.309 16.293 1.419 28.797 2.843 37.914 6.648 5.832-1.888 11.047-3.878 15.301-6.03v-22.613c-24.68 10.243-52.42 3.068-67.861-28.8 16.333 12.485 44.326 23.76 67.861 8.746V72.945zM192 157c-40.75 1.88-77.826-.767-116.965 8.832 28.05 96.266-1.687 216.838-32.195 309.791 11.247 5.175 30.635 10.198 53.91 13.465C124.683 493.008 158.353 495 192 495s67.317-1.992 95.25-5.912c23.275-3.267 42.663-8.29 53.91-13.465-30.508-92.953-60.246-213.525-32.195-309.791-8.367-2.095-22.342-4.439-38.744-5.865C247.59 157.999 219.786 157 192 157zm188.23 53c-20.97 0-41.962.757-58.994 2.24-1.125.098-2.22.207-3.308.317-8.896 79.06 12.998 172.267 37.445 248.76 8.189.323 16.517.501 24.857.501 25.373 0 50.765-1.507 71.762-4.459 16.35-2.298 30.045-5.83 38.403-9.298-22.686-69.604-44.617-159.096-24.422-231.875-6.263-1.396-15.673-2.981-26.748-3.946-17.032-1.483-38.023-2.24-58.995-2.24zm-141.335 28.21c29.289 17.126 45.21 48.33 44.464 80.056l-61.252-6c-.43-7.908-4.625-15.474-11.837-19.84l28.625-54.215zm-92.956 1.12l27.79 52.514a24.504 24.504 0 0 0-9.616 9.347 24.489 24.489 0 0 0-3.258 11.075l-57.384 6c-.42-16.048 3.166-32.448 11.78-47.37 7.723-13.372 18.408-23.987 30.688-31.566zm45.895 64.092c3.515.034 5.522.778 7.762 2.07a16.161 16.161 0 0 1 5.933 22.162 16.144 16.144 0 0 1-22.146 5.934 16.165 16.165 0 0 1-5.947-22.162c2.815-4.876 8.244-7.778 12.794-7.975a30.402 30.402 0 0 1 1.604-.03zm12.478 43.203l31.467 48.578c-13.778 7.362-29.255 11.298-44.92 10.89-14.368-.372-28.682-4.176-42.029-11.782l30.828-47.12c7.95 4.349 17.346 3.852 24.655-.566z",
        "constructionCost": [
            {
                "name": "Metal",
                "quantity": 500
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "Energy",
                    "quantity": 200,
                    "to": "storage"
                },
                {
                    "name": "Ground pollution",
                    "quantity": 50,
                    "to": "planet"
                }
            ],
            "require": [
                {
                    "name": "Fissile material",
                    "quantity": "300"
                }
            ]
        },
        "buildOnLand": true,
        "buildOnWater": false
    },
    "Fusion Reactors": {
        "type": "Power Plant",
        "svgCode": "M13.447 18l4.826 20.656c17.47 32.683 68.819 20.747 94.545-1.635-14.136 38.399-65.72 49.25-95.964 26.354-.794 11.045 1.01 18.688 4.326 23.547 4.729 6.93 13.658 10.949 30.021 11.203l12.475.193-4.12 11.778c-5.347 15.288-4.928 23.375-1.91 28.478 1.975 3.337 6.034 6.533 12.678 9.545 40.193-8.27 83.572-9.067 121.676-9.119 28.214 0 56.41 1.001 79.78 3.033 23.37 2.032 41.025 4.306 52.245 9.916 10.816 5.781 25.574 5.525 36.207 3.994 9.222-1.415 16.325-4.613 21.387-10.853 3.954-4.874 7.015-12.152 7.9-23.31-33.606 4.231-67.935-8.9-76.294-47.872 40.54 37.963 82.92 42.849 131.005 16.412 11.444-6.49 18.25-14.805 20.485-27.605l1.392-7.975 8.079.543c7.79.524 14.336.366 19.814-.267V18h-21.979c-20.534 43.036-74.988 67.68-115.3 21.922 29.23 13.223 71.841 14.87 94.744-21.922H13.447zm270.645 29.957c-7.744 21.146-22.92 44.73-47.414 51.688-26.23 34.754-92.726 38.651-119.86-17.305 20.443 24.144 61.662 34.958 91.328 17.668-27.204-8.009-48.057-46.875-46.736-47.535 0 2.077 41.737 29.713 57.897 29.654 25.989.029 43.257-14.207 64.785-34.17zM494 72.945c-4.196.368-8.676.507-13.467.412-4.623 14.341-14.644 25.372-27.422 32.62-12.914 7.325-28.605 11.249-45.64 13.244-.675 15.828-4.645 28.298-11.873 37.209-8.483 10.457-20.558 15.453-32.637 17.306-12.578 1.93-25.722.924-37.504-.76a236.7 236.7 0 0 0-4.86 21.258C338.19 192.74 359.193 192 380.23 192c21.401 0 42.782.76 60.555 2.309 16.293 1.419 28.797 2.843 37.914 6.648 5.832-1.888 11.047-3.878 15.301-6.03v-22.613c-24.68 10.243-52.42 3.068-67.861-28.8 16.333 12.485 44.326 23.76 67.861 8.746V72.945zM192 157c-40.75 1.88-77.826-.767-116.965 8.832 28.05 96.266-1.687 216.838-32.195 309.791 11.247 5.175 30.635 10.198 53.91 13.465C124.683 493.008 158.353 495 192 495s67.317-1.992 95.25-5.912c23.275-3.267 42.663-8.29 53.91-13.465-30.508-92.953-60.246-213.525-32.195-309.791-8.367-2.095-22.342-4.439-38.744-5.865C247.59 157.999 219.786 157 192 157zm188.23 53c-20.97 0-41.962.757-58.994 2.24-1.125.098-2.22.207-3.308.317-8.896 79.06 12.998 172.267 37.445 248.76 8.189.323 16.517.501 24.857.501 25.373 0 50.765-1.507 71.762-4.459 16.35-2.298 30.045-5.83 38.403-9.298-22.686-69.604-44.617-159.096-24.422-231.875-6.263-1.396-15.673-2.981-26.748-3.946-17.032-1.483-38.023-2.24-58.995-2.24z",
        "constructionCost": [
            {
                "name": "Metal",
                "quantity": 5000
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "Energy",
                    "quantity": 200,
                    "to": "storage"
                }
            ]
        },
        "buildOnLand": true,
        "buildOnWater": false
    },

    "Quarry": {
        "type": "Mine",
        "svgCode": "M365.906 60.844C347.218 62.03 327.732 73.3 307.72 87.5c-20.814 14.77-41.852 32.27-64.626 41.875a8 8 0 0 1-9.125-2.125c-15.01-17.31-38.15-30.55-73.22-27.28-19.124 1.78-32.252 10.625-43.688 23.655-5.264 6-9.998 12.975-14.53 20.375h322.624c-15.21-29.846-29.05-64.182-59.25-83.156zM40 160v44h416v-44H40zm18.375 60l49.344 186.563H118c3.087-6.592 7.31-12.684 12.563-17.938 11.916-11.916 28.63-18.906 45.843-18.906 17.214 0 33.897 6.99 45.813 18.905 5.252 5.254 9.467 11.346 12.56 17.938h42.97c3.104-6.47 7.282-12.44 12.406-17.563 11.927-11.926 28.384-18.75 45.25-18.75 16.867 0 33.324 6.824 45.25 18.75 5.124 5.124 9.303 11.092 12.406 17.563h6.032L438.156 220H58.376zM426.22 355l-6.064 29H456v-29h-29.78zm-249.814 31.563c-11.69 0-23.728 4.915-32.25 13.437-8.522 8.522-13.75 21.002-13.75 33.344 0 12.34 5.228 24.82 13.75 33.344 8.522 8.522 20.56 13.437 32.25 13.437 11.69 0 23.697-4.915 32.22-13.438 8.52-8.522 13.78-21.002 13.78-33.343 0-12.342-5.26-24.822-13.78-33.344-8.523-8.522-20.53-13.438-32.22-13.438zm159 1.28c-12.037 0-24.3 5.083-32.812 13.594C294.082 409.95 289 422.212 289 434.25c0 12.038 5.082 24.3 13.594 32.813 8.512 8.51 20.775 13.593 32.812 13.593 12.038 0 24.3-5.082 32.813-13.594 8.51-8.51 13.592-20.774 13.592-32.812 0-12.038-5.08-24.3-13.593-32.813-8.513-8.51-20.776-13.593-32.814-13.593z",
        "constructionCost": [
            {
                "name": "Metal",
                "quantity": 100
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "Mineral",
                    "quantity": 1000,
                    "to": "storage"
                },
                {
                    "name": "Oxocarbon",
                    "quantity": 100,
                    "to": "planet"
                }
            ],
            "require": [
                {
                    "name": "Energy",
                    "quantity": 50,
                    "planetResource": true
                },
                {
                    "name": "Mineral",
                    "quantity": 1000,
                    "planetResource": true
                }
            ]
        },
        "buildOnLand": true,
        "buildOnWater": false
    },
    "Foundry": {
        "type": "Mine",
        "svgCode": "M39.557 19L323.44 273h149.003L188.56 19H39.558zM25 30.13v25.847L311 311.87V286.024L25 30.13zm64 107.263v34.584L375 427.87v-84.843l-64-13.002L89 137.393zM77.555 185.89l-42.9 10.723 287.79 257.498 42.9-10.723L77.556 185.89zM25 212.13v23.847L311 491.87v-23.847L25 212.13zM329 291v21.973l64 16v126.054l-64 16V493h158v-21.973l-64-16V328.973l64-16V291H329zm112 135.865v14.108l21.88 5.47L441 426.865z",
        "constructionCost": [
            {
                "name": "Metal",
                "quantity": 100
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "Metal",
                    "quantity": 1000,
                    "to": "storage"
                },
                {
                    "name": "Oxocarbon",
                    "quantity": 100,
                    "to": "planet"
                }
            ],
            "require": [
                {
                    "name": "Energy",
                    "quantity": 50,
                    "planetResource": true
                },
                {
                    "name": "Metal",
                    "quantity": 1000,
                    "planetResource": true
                }
            ]
        },
        "buildOnLand": true,
        "buildOnWater": false
    },
    "Enrichment Facility": {
        "type": "Mine",
        "svgCode": "M77.637 19.54l108.717 144.544C145.316 176.7 91.09 152.704 40.102 132.53c40.576 32.116 110.02 65.16 103.662 97.53-6.637 33.79-75.205 49.33-121.065 72.52 46.032-5.046 91.778-21.09 120.15-9.78L18.38 347.136v20.39l138.388-60.41c2.133 14.26-9.665 37.273-22.043 55.985 22.007-10.08 46.61-21.938 65.523-22.06l-88.396 153.774h21.554l85.24-148.283c.553.434 1.093.892 1.616 1.382 33.55 31.47 34.284 87.542 43.888 141.225 9.885-54.016 13.682-119.31 41.846-138.094 16.562-11.047 96.26 29.193 143.596 57.07-22.238-21.752-82.32-73.64-85.68-95.812l129.744 65.993v-20.967L373.928 296.43c15.57-11.084 41.937-10.558 69.68-9.85-24.522-9.618-58.892-23.885-65.766-41.35l115.814-14.85v-18.843L380.154 226.09c14.736-32.777 66.75-61.05 108.05-93.555-49.74 19.266-106.767 55.532-135.92 41.254L493.655 31.177v-11.64H478.88L338.847 160.8c-18.24-30.214-6.765-92.786-3.715-141.26h-1.612C310.903 69.054 293.7 132.87 265 145.722c-17.43 7.805-35.296-38.196-47.615-67.204-2.256 29.66.042 60.142-14.79 76.07L101.022 19.54H77.638zM264.99 164.856c14.46-.133 28.89 7.536 38.207 19.274l-37.6 39.634-32.01-42.682c8.894-11.298 20.157-16.12 31.403-16.225zm-63.12 19.854l27.67 36.79-24.913 14.285 11.115 25.197-41.054 17.92c-7.104-35.84-1.95-70.025 27.18-94.19zm123.444 5.81c13.297 3.537 23.613 20.006 22.25 32.79h-.002l-40.875 12.2-14.755 1.892 33.382-46.882zm-27.04 60.994l60.404 1.707c3.703 9.603.78 23.42-6.65 32.07l-33.456-17.015-20.3-16.76zm-57.426 18.9l-32.82 57.094c-15.34-7.173-26.714-18.043-29.585-29.854l62.405-27.24zm21.537.027l52.084 28.67c-20.86 34.903-58.097 41.72-88.45 34.593l36.365-63.262z",
        "constructionCost": [
            {
                "name": "Metal",
                "quantity": 500
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "Fissile material",
                    "quantity": 1000,
                    "to": "storage"
                },
                {
                    "name": "Oxocarbon",
                    "quantity": 100,
                    "to": "planet"
                }
            ],
            "require": [
                {
                    "name": "Energy",
                    "quantity": 50,
                    "planetResource": true
                },
                {
                    "name": "Fissile material",
                    "quantity": 1000,
                    "planetResource": true
                }
            ]
        },
        "buildOnLand": true,
        "buildOnWater": false
    },

    "Pumping Station": {
        "type": "Mine",
        "svgCode": "M121 18v143.537c0 3.913 2.64 9.707 7.28 14.166 4.638 4.46 10.825 7.297 16.05 7.297H279v-46H167V18zm112 0v23h-48v46h71c5 0 11.05-2.777 15.637-7.363C276.223 75.05 279 69 279 64V18zm96 0v37h46V18zM80 41c-5 0-11.05 2.777-15.637 7.363C59.777 52.95 57 59 57 64v183h46V41zm249 32v46h46V73zm-32 64v46h197v-46zm32 64v46h46v-46zM18 265v46h135v82h-32v46h54.934c5.045 0 11.15-2.802 15.754-7.32 4.604-4.518 7.312-10.428 7.312-14.846V311h102.174A88.47 88.47 0 0 1 343 295.47v18.114c-19.383 2.436-36.29 12.62-47.53 27.385l-22.11-12.765-9 15.59 22.11 12.764C282.95 364.994 281 374.26 281 384s1.95 19.005 5.47 27.44l-22.11 12.765 9 15.59 22.11-12.764c11.24 14.767 28.147 24.95 47.53 27.386v18.127a88.535 88.535 0 0 1-14-2.566V494h46v-24.023a88.535 88.535 0 0 1-14 2.566v-18.127c19.383-2.436 36.29-12.62 47.53-27.385l22.11 12.765 9-15.59-22.11-12.764c3.52-8.435 5.47-17.702 5.47-27.44s-1.95-19.005-5.47-27.44l22.11-12.765-9-15.59-22.11 12.764c-11.24-14.767-28.147-24.95-47.53-27.386V295.47A88.47 88.47 0 0 1 402.826 311H494v-46zm325 62.723v40.687l-35.19-20.316c8.668-10.64 21.08-18.113 35.19-20.37zm18 0c14.11 2.258 26.522 9.732 35.19 20.37L361 368.41zM57 329v165h46V329zm380.977 32A88.703 88.703 0 0 1 441 384c0 7.95-1.055 15.66-3.023 23H494v-46zm-139.198 2.666L333.997 384l-35.22 20.334A56.53 56.53 0 0 1 295 384a56.53 56.53 0 0 1 3.78-20.334zm106.44 0A56.53 56.53 0 0 1 409 384a56.53 56.53 0 0 1-3.78 20.334L370.003 384zM18 393v46h21v-46zm325 6.59v40.687c-14.11-2.258-26.522-9.732-35.19-20.37zm18 0l35.19 20.316c-8.668 10.64-21.08 18.113-35.19 20.37z",
        "constructionCost": [
            {
                "name": "Metal",
                "quantity": 500
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "Water",
                    "quantity": 1000,
                    "to": "storage"
                }
            ],
            "require": [
                {
                    "name": "Energy",
                    "quantity": 50,
                    "planetResource": true
                },
                {
                    "name": "Water",
                    "quantity": 1000,
                    "planetResource": true
                }
            ]
        },
        "buildOnLand": false,
        "buildOnWater": true
    },
    "Compressor": {
        "type": "Mine",
        "svgCode": "M256 54.28c-124.603 0-226 101.398-226 226 0 47.864 14.975 92.293 40.465 128.876l29.79-19.86c-17.188-24.545-28.708-53.362-32.696-84.577H96v-18H66.115c-.07-2.14-.115-4.284-.115-6.44 0-45.378 15.816-86.97 42.236-119.598l17.4 17.4 12.727-12.727-18.133-18.132C152.735 114.057 197.335 92.8 247 90.498v29.22h18V90.5c49.665 2.302 94.265 23.56 126.77 56.725l-18.133 18.132 12.726 12.727 17.4-17.4c26.42 32.63 42.237 74.22 42.237 119.6 0 2.154-.044 4.3-.115 6.437H416v18h28.44c-3.987 31.214-15.507 60.03-32.694 84.575l29.79 19.86C467.025 372.574 482 328.146 482 280.282c0-124.602-101.397-226-226-226zm15.83 66.23a144 160 0 0 1 74.608 100.062l49.966-17.568a160 160 0 0 0-4.3-7.012l-5.135 5.153-30.368-30.29-5.76-5.746 7.85-7.874a160 160 0 0 0-86.862-36.726zm156.15 89.844l-175.332 60.6C240.505 272.618 231 283.155 231 295.72c0 13.7 11.3 25 25 25 6.77 0 12.95-2.764 17.473-7.208L427.98 210.354zm-16.513 32.322l-60.713 40.72a144 160 0 0 1-56.6 108.323h76.057a160 160 0 0 0 39.763-68.572H398.48v-52.515h17.022a160 160 0 0 0-4.035-27.957zM128 421.72v36h256v-36H128z",
        "constructionCost": [
            {
                "name": "Metal",
                "quantity": 500
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "Air",
                    "quantity": 1000,
                    "to": "storage"
                }
            ],
            "require": [
                {
                    "name": "Energy",
                    "quantity": 50,
                    "planetResource": true
                },
                {
                    "name": "Air",
                    "quantity": 1000,
                    "planetResource": true
                }
            ]
        },
        "buildOnLand": true,
        "buildOnWater": true
    },

    "Desalination Plant": {
        "type": "Utility",
        "svgCode": "M256.53 27.375c-48.39 0-92.187 5.807-124.655 15.53-16.234 4.863-29.648 10.643-39.688 17.75-10.04 7.11-17.5 16.403-17.5 27.75 0 1.172.097 2.312.25 3.44h-.187l1 10.25 32.875 339.592h.03c.536 9.302 7.122 16.108 15.064 21.22 8.123 5.228 18.688 9.385 31.436 12.937 25.497 7.103 59.68 11.406 97.438 11.406 37.76 0 71.92-4.304 97.437-11.406 12.76-3.55 23.357-7.718 31.5-12.938 7.934-5.085 14.494-11.798 15.158-21.03h.03l39.25-339.595.47-4.093c1.244-3.065 1.937-6.327 1.937-9.78 0-11.35-7.46-20.642-17.5-27.75-10.04-7.11-23.453-12.89-39.688-17.75-32.468-9.725-76.265-15.532-124.656-15.532zm0 18.688c46.88 0 89.348 5.775 119.314 14.75 14.983 4.487 26.83 9.84 34.25 15.093 7.42 5.254 9.594 9.582 9.594 12.5 0 2.918-2.175 7.216-9.594 12.47-7.42 5.252-19.267 10.605-34.25 15.093-29.966 8.973-72.434 14.75-119.313 14.75-46.878 0-89.314-5.777-119.28-14.75-14.983-4.49-26.83-9.842-34.25-15.095-7.42-5.253-9.625-9.55-9.625-12.47 0-2.917 2.206-7.245 9.625-12.5 7.42-5.252 19.267-10.605 34.25-15.093 29.966-8.974 72.402-14.75 119.28-14.75zM96.126 118.75c9.51 5.925 21.563 10.876 35.75 15.125 32.468 9.724 76.265 15.53 124.656 15.53 34.11 0 65.91-2.89 93.095-8l-4 76.25c-25.53-4.724-57.128-7.5-91.344-7.5-68.924 0-127.24 11.32-146.686 26.94L96.124 118.75zm319.03 1.094l-13.624 117.72c-4.28-3.6-10.63-6.96-18.686-10.033l9.187-97.186c8.758-3.123 16.52-6.593 23.126-10.5zm-16.405 141.72l-9.53 82.498c-3.96 9.04-10.745 16.984-19.658 23.813L378.72 271c8.322-2.87 15.116-6.047 20.03-9.438zm-288.78.092c21.506 14.704 78 25.22 144.31 25.22 32.79 0 63.15-2.597 88.095-6.97l-5.5 105.188c-73.98 27.105-197.158 14.24-219.094-42.625l-7.81-80.814z",
        "constructionCost": [
            {
                "name": "Metal",
                "quantity": 100
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "Fresh water",
                    "quantity": 900,
                    "to": "storage"
                },
                {
                    "name": "Mineral",
                    "quantity": 100,
                    "to": "storage"
                }
            ],
            "require": [
                {
                    "name": "Energy",
                    "quantity": 50,
                    "planetResource": true
                },
                {
                    "name": "Salt water",
                    "quantity": 1000,
                    "planetResource": true
                }
            ]
        },
        "buildOnLand": false,
        "buildOnWater": true
    },
    "Recycling Factory": {
        "type": "Utility",
        "svgCode": "M 334.64411,0.02835 193.40063,1.06097 c 30.13769,8.98849 49.21736,31.61486 65.25284,61.13092 l 43.15773,79.71804 -32.62642,20.85886 117.0834,1.03262 L 448.63007,61.15928 411.66723,80.36595 386.26818,33.27862 C 378.38809,15.27083 355.12854,-0.76649 334.64411,0.02835 z M 173.164,5.19143 c -9.11353,0.69756 -18.20465,4.66201 -26.84452,12.59793 L 87.468029,108.65966 197.94355,174.12771 256.795,78.30072 C 239.09619,40.64301 205.71237,2.70013 173.164,5.19143 z m 288.26884,161.08839 -109.64954,67.11978 53.48254,98.92504 c 52.24165,3.15237 117.18768,-16.29057 105.31312,-69.18567 L 461.43284,166.27982 z M 123.60488,167.72515 2.8045465,168.7581 37.082934,195.39929 4.8695096,257.15012 c -16.1193326,28.48701 11.4724724,56.22195 29.1159794,65.88063 17.368817,9.50867 44.401725,10.67247 69.589251,10.32617 l 45.22269,-74.14157 34.27839,18.58711 -59.47094,-110.07731 z M 326.79725,302.37841 269.18478,406.46621 326.79725,512 l 1.44547,-42.1308 52.65656,0 c 19.23621,1.6965 44.21975,-11.0617 53.48254,-29.73934 l 67.73079,-126.80537 c -22.32162,22.56755 -51.01285,28.50022 -84.04399,28.50022 l -88.99991,0 -2.27146,-39.4463 z M 7.7604581,311.87849 81.27314,447.5647 c 14.78084,18.8739 42.77758,23.4029 71.65422,22.7176 l 77.43611,0 0,-128.66444 -147.025367,-1.03229 c -22.834391,1.37661 -52.74325,-3.31362 -75.5776449,-28.70708 z",
        "constructionCost": [
            {
                "name": "Metal",
                "quantity": 100
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "Pollution",
                    "quantity": 100,
                    "to": "storage"
                }
            ],
            "require": [
                {
                    "name": "Energy",
                    "quantity": 50,
                    "planetResource": true
                },
                {
                    "name": "Pollution",
                    "quantity": 100,
                    "planetResource": true
                }
            ]
        },
        "buildOnLand": true,
        "buildOnWater": false
    },

    "Incubator": {
        "type": "Habitat",
        "svgCode": "M365.47 18.727c-11.353-.18-21.053 7.365-24.786 20.058h-.002c-24.423-7.6-57.52-4.092-68.328 19.856-15.69-20.86-47.866-13.98-55.194 9.85-7.328 23.828 13.462 49.474 44.68 48.55-3.078 33.98 44.304 54.69 81.764 39.132-.473 19.307 8.312 41.853 30.37 44.97-6.395 18.11 3.104 42.047 28.614 42.047 31.47 0 38.024-36.316 21.025-53.145 9.474-10.39 12.832-25.167 11.096-39.13 17.282 12.104 34.59-6.52 33.767-20.08-1.516-24.97-20.366-35.97-33.768-24.3-8.8-27.616-37.243-32.007-52.562-16.353 1.35-7.425.2-13.105-5.255-19.274 22.605-5.702 18.913-37.698 4.68-46.904-5.44-3.517-10.942-5.195-16.102-5.277zm68.37 5.13c-22.7 0-22.882 34.655 0 34.655s22.7-34.655 0-34.655zM177.672 74.842c-22.7 0-22.882 34.654 0 34.654s22.7-34.654 0-34.654zm64.695 59.38c-1.695.06-3.792.895-5.877 2.887-4.765 4.554-8.11 13.804-1.814 24.216 1.365 2.257 2.837 4.486 4.408 6.672l-14.21 26.414-34.43 59.637-153.62 87.682-.008.006c-11.038 6.375-16.508 14.786-17.537 24.037-1.03 9.254 2.46 20.22 13.083 31.508 45.295 48.134 101.19 77.71 164.907 95.106 15.645 4.267 26.47 2.614 33.156-2.1 6.686-4.712 11.047-13.382 11.047-28.413v-.006l.214-177.61 38.008-65.832c-14.036-3.907-26.16-10.638-36.332-18.932l8.967-16.67c13.568 12.152 31.753 20.64 55.14 20.645 11.536-.03 18.363-7.457 20.046-13.542.84-3.044.414-5.247-.604-6.73-1.018-1.48-3.004-3.204-8.754-3.66-31.006-2.452-53.782-15.764-68.293-39.714-2.816-4.65-5-5.413-6.797-5.584-.224-.02-.46-.028-.7-.02zm234.053 39.305c-22.7 0-22.882 34.655 0 34.655s22.7-34.655 0-34.655zm-44.668 86.022c-35.27 0-35.553 53.837 0 53.837s35.27-53.838 0-53.838zm-235.256 8.337l9.367 16.172-136.506 79.06-.005.003c-4 2.31-4.756 3.894-5.043 5.127-.29 1.233-.127 3.423 1.852 7.027.543.988 1.228 2.044 2.024 3.15l-.416-.193c18.068 27.077 54.2 61.967 89.34 80.934-23.56-10.45-50.91-25.15-72.737-40.756C69.11 407.5 56.51 396.524 49.78 384.272c-3.363-6.124-5.332-13.14-3.673-20.262 1.66-7.123 6.93-13.046 13.9-17.07l136.49-79.053zm-88.068 88.87c18.55 6.4 52.894 25.26 80.154 46.013 13.63 10.375 25.305 20.885 32.086 31.998 3.022 4.952 5.264 10.303 5.2 16.203l-20.626-9.488c-9.495-11.61-23.806-22.776-35.75-29.517-24.435-17.28-54.436-33.15-67.16-37.54l6.096-17.667z",
        "constructionCost": [
            {
                "name": "Metal",
                "quantity": 500
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "Bacteria",
                    "quantity": 1000,
                    "to": "storage"
                }
            ],
            "require": [
                {
                    "name": "Fresh water",
                    "quantity": 1000,
                    "planetResource": true
                },
                {
                    "name": "Mineral",
                    "quantity": 1000,
                    "planetResource": true
                }
            ]
        },
        "buildOnLand": false,
        "buildOnWater": true
    },
    "Greenhouse": {
        "type": "Habitat",
        "svgCode": "M173.015 22.936L23 188.546V489h466V188.844L356.326 23c-61.101-.336-122.211.492-183.31-.064zM196.207 41h71.467l113.601 142h-57.267zm94.52 0h56.947l113.601 142h-56.95zM176 45.455l135 149.998V471H41V195.453zm46.676 104.662c-28.028 1.213-50.09 13.314-66.613 29.309-19.1 18.49-30.514 42.355-33.84 59.283-7.239 36.843 9.808 61.862 31.07 70.447.02-.202.049-.176.002-.24-7.507-38.847 4.114-75.91 28.72-100.455-18.585 28.567-20.994 70.834-9.7 103.953a38.802 38.802 0 0 0 13.834-3.451c10.316-4.728 19.615-14.342 25.414-30.531 6.178-17.248.883-45.042-1.242-71.45-1.062-13.203-1.264-26.148 1.892-37.703 1.944-7.113 5.327-13.7 10.463-19.162zM329 201h62v110h-62zm80 0h62v110h-62zM78.174 243.512c-15.848 17.804-21.765 38.434-22.088 58.12-.38 23.193 7.323 44.995 15.678 57.44 18.033 26.86 43.723 31.7 61.941 24.3-28.494-19.45-44.12-49.495-44.082-79.847 6.147 29.067 30.586 56.61 57.916 70.24a33.509 33.509 0 0 0 6.424-10.67c3.408-9.175 3.24-20.71-3.149-34.238-6.745-14.28-27.202-28.267-44.939-43.365-8.869-7.55-17.058-15.495-22.326-24.726-3.013-5.281-4.947-11.098-5.375-17.254zm216.205 37.386c-3.45 5.122-8.026 9.207-13.28 12.276-9.176 5.36-20.237 8.138-31.69 10.24-22.91 4.206-47.61 6.085-60.589 15.076-12.295 8.52-18.226 18.434-19.861 28.084a33.488 33.488 0 0 0 .238 12.45c30.484 1.864 65.412-9.769 85.268-31.868-15.136 26.304-43.686 44.509-78.08 47.104 12.078 15.52 36.73 24.18 65.771 9.937 13.456-6.598 31.037-21.629 42.301-41.902 9.562-17.212 14.747-38.051 9.922-61.397zM329 329h62v142h-62zm80 0h62v142h-62zm-257.033 58.621c-3.298 23.051 5.13 45.02 5.135 61.172l18-.006c-.006-21.306-7.68-42.102-5.317-58.615-4.348-6.181-9.231-7.098-17.818-2.55z",
        "constructionCost": [
            {
                "name": "Metal",
                "quantity": 50
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "Oxygen",
                    "quantity": 300,
                    "to": "planet"
                }
            ],
            "require": [
                {
                    "name": "Energy",
                    "quantity": 50,
                    "planetResource": true
                },
                {
                    "name": "Oxocarbon",
                    "quantity": 50,
                    "planetResource": true
                }
            ]
        },
        "buildOnLand": true,
        "buildOnWater": false
    },
    "Geodesic Dome": {
        "type": "Habitat",
        "svgCode": "M256 32.951l116.926 35.666 83.185 88.81 30.06 112.33-24.831 8.839-87.744-66.914-25.073 107.062-14.076 5.01H319.15L256 229.367l-63.15 94.387h-15.297l-14.076-5.01-25.073-107.062-87.744 66.914-24.832-8.838 30.06-112.33 83.186-88.81zm0 18.819l-71.54 21.822 24.51 3.738.157-.246.139.291L256 84.502l46.734-7.127.14-.291.155.246 24.51-3.738zm108.672 34.367L313.6 93.926l51.023 80.113 18.404-68.305zm-217.344 0l-18.355 19.597 18.404 68.305L198.4 93.926zm146.026 10.877L256 102.71l-37.354-5.697L256 175.217zm11.771 17.115l-42.479 88.933 90.342-13.779zm-98.25 0l-47.863 75.154 90.342 13.78zm190.629 7.06l-15.992 59.352 51.133-21.836zm-283.008 0l-35.14 37.516 51.132 21.838zm327.492 53.098l-56.248 24.02 78.75 60.054zm-371.976 0L47.51 258.361l78.75-60.054zM356.203 207l-84.851 12.941 60.607 90.588zm-200.406 0l24.244 103.53 60.607-90.589zM487 288.264v32.14L334.447 375H177.553L25 320.404v-32.14l149.447 53.49h163.106zM328.193 393l13.43 94H170.377l13.428-94z",
        "constructionCost": [
            {
                "name": "Metal",
                "quantity": 100
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "Humans",
                    "quantity": 100,
                    "to": "planet"
                },
                {
                    "name": "Oxocarbon",
                    "quantity": 500,
                    "to": "planet"
                }
            ],
            "require": [
                {
                    "name": "Energy",
                    "quantity": 50,
                    "planetResource": true,
                    "remove": true
                },
                {
                    "name": "Metal",
                    "quantity": 100,
                    "planetResource": true,
                    "remove": true
                }
            ]
        },
        "buildOnLand": true,
        "buildOnWater": true
    },
    "Motherboard": {
        "type": "Habitat",
        "svgCode": "M228.844 32.22v114.218h17.687V32.218h-17.686zm-108.25.624c-15.507 0-28.094 12.586-28.094 28.093C92.5 76.444 105.087 89 120.594 89c12.655 0 23.34-8.372 26.844-19.875h44.937v77.313h17.688v-95H147.03c-3.888-10.837-14.262-18.593-26.436-18.593zm193.25 0c-15.507 0-28.063 12.586-28.063 28.093 0 12.124 7.677 22.45 18.44 26.376v59.124h17.655V87.844c11.596-3.452 20.063-14.193 20.063-26.906 0-15.508-12.587-28.094-28.094-28.094zM266.124 92.5v53.938h17.657V92.5h-17.655zm188.532 4.03c-15.507 0-28.094 12.588-28.094 28.095 0 13.083 8.948 24.074 21.063 27.188v27.468h-92.938v17.657h110.624v-46.342c10.223-4.192 17.407-14.233 17.407-25.97 0-15.507-12.557-28.094-28.064-28.094zM30.187 123.657v17.688H96.75v55.594h62.814V179.28h-45.126v-55.624h-84.25zm147.032 40.47v159.718h159.81v-159.72H177.22zm17.56 15.655h17.657v78.595l32.407 32.406h75.28v17.658H237.5l-2.594-2.594-10.75-10.75c-1.033 7.385-7.36 13.062-15.03 13.062-8.392 0-15.19-6.796-15.19-15.187 0-7.682 5.696-13.98 13.095-15l-9.655-9.658-2.594-2.593V179.78zm54.94.157h17.686v55.313h52.53l.002 17.688H249.72v-73zM53.124 217.375V307.344c-11.49 3.512-19.844 14.198-19.844 26.844 0 15.505 12.557 28.093 28.064 28.093s28.093-12.587 28.093-28.092c0-12.195-7.79-22.564-18.656-26.438v-72.72h88.782v-17.655H53.124zm301.563 0v17.656h53.968v-17.655h-53.97zm99.968 21.97c-10.898 0-20.342 6.21-25 15.28h-74.97l.002 17.688H427c2.325 13.168 13.824 23.187 27.656 23.187 15.507 0 28.063-12.588 28.063-28.094 0-15.507-12.557-28.062-28.064-28.062zm-349.062 15.28v17.688h53.97v-17.688h-53.97zm17.156 36.47v84.217c-11.498 3.513-19.875 14.2-19.875 26.844 0 15.506 12.587 28.094 28.094 28.094 15.506 0 28.06-12.588 28.06-28.094 0-12.194-7.766-22.564-18.624-26.437v-66.94h19.156v-17.686H122.75zm231.938 0v17.686h45.156v95.283c-11.323 3.624-19.53 14.26-19.53 26.78-.002 15.506 12.585 28.063 28.092 28.063 15.507 0 28.063-12.557 28.063-28.062 0-12.32-7.935-22.778-18.97-26.563V291.095h-62.814zM192.375 341.53v54.033h17.688V341.53h-17.688zm36.47 0v86.564c-11.013 3.794-18.94 14.233-18.94 26.53 0 15.506 12.588 28.095 28.095 28.095s28.063-12.59 28.063-28.095c0-12.53-8.203-23.14-19.532-26.75V341.53h-17.686zm37.28 0v54.033h17.688l-.032-54.032h-17.655zm38.094 0v140.064h17.655V341.53H304.22z",
        "constructionCost": [
            {
                "name": "Metal",
                "quantity": 100
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "Machines",
                    "quantity": 100,
                    "to": "planet"
                },
                {
                    "name": "Oxocarbon",
                    "quantity": 500,
                    "to": "planet"
                }
            ],
            "require": [
                {
                    "name": "Energy",
                    "quantity": 50,
                    "planetResource": true,
                    "remove": true
                },
                {
                    "name": "Metal",
                    "quantity": 100,
                    "planetResource": true,
                    "remove": true
                }
            ]
        },
        "buildOnLand": true,
        "buildOnWater": true
    },

    "Colonization shuttle": {
        "type": "ship",
        "svgCode": "M18.78 25.97c2.6 25.278 9.316 48.72 19.532 69.75l-21.218-6.564L73.53 146.72l-.843-1.782c16.737 17.29 36.797 31.38 59.438 41.593-13.546-18.845-21.597-41.677-22.03-69.28 27.78.35 50.396 8.56 69.25 22.063-.627-1.4-1.284-2.776-1.94-4.157l.72.625-34.438-86.655-2.53 33.844c-30.974-31.598-73.044-52.084-122.376-57zm236.814 31.593L217.22 160.875c-30.663 7.52-54.566 32.236-60.907 63.344l-.188-.22-106.563 39.563 74.313 74.312 93-8.03.375-.033 23.03-2.468-77.31-94.938 13.28-13.28 89.406 109.75 10.875 13.374-17.124 1.844-28.22 3.03c14.52 17.126 30.304 33.143 47.22 47.907 7.62-56.784 52.175-102.042 108.625-110.717-14.72-16.738-30.68-32.346-47.75-46.688l-2.78 26.125-1.844 17.125L321.28 270l-107.874-88.03 13.25-13.25 93.094 75.905 2.22-20.844 7.905-91.936-74.28-74.28zM401.53 301.625c-8.783.408-17.306 1.827-25.436 4.156l13.875 16.908c7.51-2.534 15.37-4.323 23.467-5.282-3.863-5.344-7.814-10.62-11.906-15.78zm-43.78 11.25c-7.323 3.61-14.204 7.994-20.5 13.063l15.75 17.28c5.92-4.876 12.318-9.16 19.125-12.812l-14.375-17.53zm68 22.438c-7.92.117-15.616 1.157-22.97 3.03l14.5 17.688c6.108-1.82 12.447-3.043 18.97-3.686-3.387-5.76-6.865-11.445-10.5-17.03zm-102.03 3.53c-6.713 7.584-12.4 16.116-16.845 25.344l17.313 14.125c4.28-7.958 9.44-15.37 15.375-22.093l-15.844-17.376zm60.467 6.282c-6.67 3.247-12.908 7.267-18.625 11.875l16.282 17.875c5.34-4.382 11.15-8.233 17.312-11.47l-14.97-18.28zm-32 24.938c-5.204 6.153-9.673 12.96-13.25 20.28l17.97 14.688c3.305-6.06 7.202-11.76 11.624-17l-16.342-17.967zm94.094.218v.22c-45.915 0-82.96 36.985-83.06 82.875 39.248 20.8 81.966 35.93 127.06 44.313-8.284-45.328-23.3-88.145-44-127.407zM299.94 382.626c-2.38 8.6-3.743 17.625-3.97 26.938 4.937 3.885 9.96 7.664 15.063 11.343.93-8.58 2.75-16.88 5.44-24.812l-16.533-13.47zm32.156 26.25c-2 7.785-3.073 15.96-3.094 24.375 5.28 3.43 10.632 6.727 16.063 9.938.72-6.992 2.156-13.776 4.218-20.282l-17.186-14.03z",
        "constructionCost": [
            {
                "name": "Metal",
                "quantity": 50
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "ship",
                    "quantity": 0
                }
            ],
            "require": [
            ]
        },
        "buildOnLand": true,
        "buildOnWater": false
    }
};

Object.keys(aos.buildingTemplates).forEach(function (key, i) {
    aos.buildingTemplates[key].index = i;
}, this);
