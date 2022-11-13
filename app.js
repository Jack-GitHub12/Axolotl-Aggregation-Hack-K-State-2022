
                        var shrimp= 0;
                        var amount = 0;

                        var netCost = 20;
                        var netUpgrades = 0;

                        var planktonCost = 5;
                        var planktonUpgrades = 0;

                        var mineralCost = 500;
                        var mineralUpgrades = 0;

                        var ach1 = 0;
                        var ach2 = 0;
                        var ach3 = 0;
                        var ach4 = 0;
                        var ach5 = 0;
                        var ach6 = 0;
                        var ach7 = 0;
                        var ach8 = 0;

                        //let buyStock = document.getElementById('buystocks');
                       
                        //buyStock.addEventListener('click', () =>{
                           
                            
                        //});
                        

                       
                        function buybonds(){
                                
                            let input1 = prompt("Please enter number","number");
                            
                            if(input1 != null){
                            var investment1 = parseFloat(input);
                            if(investment1 <= shrimp){
                                addInvestmentToShrimp(-1*investment1);
                                var bondROI = (Math.random() - 0.5 + 1.6)*.01;
                                var shrimpReturn  = bondROI*investment1;
                                setTimeout(addToShrimp, 10000, shrimpReturn);
                            }
                            }
                        };
                        

                        function buyIndex(){
                            let input = prompt("Please enter number","number");
                            if(input != null){
                            var investment = parseFloat(input);
                            if(investment <= shrimp){
                                addInvestmentToShrimp(-1*investment);
                            var indexROI = (Math.random()*50 -25 + 11.88)*.01;
                            var shrimpReturn  = indexROI*investment;
                            setTimeout(addToShrimp, 10000, shrimpReturn);
                            }
                        }
                        };

                        function buyETF(){
                            let input = prompt("Please enter number","number");
                            if(input != null){
                            var investment = parseFloat(input);
                            if(investment <= shrimp){
                                addInvestmentToShrimp(-1*investment);
                            var etfROI = (Math.random()*50 -25 + 10)*.1;
                            var shrimpReturn  = etfROI*investment;
                            setTimeout(addToShrimp, 10000, shrimpReturn);
                            }
                        }
                        };

                        function buyMutual(){
                            let input = prompt("Please enter number","number");
                            if(input != null){
                            var investment = parseFloat(input);
                            if(investment <= shrimp){
                                addInvestmentToShrimp(-1*investment);
                            var mutualROI = (Math.random()*80 -40 + 12.86)*.01;
                            var shrimpReturn  = mutualROI*investment;
                            setTimeout(addToShrimp, 10000, shrimpReturn);
                            }
                        }
                        };

                        function stonks(){
                                
                            let input = prompt("Please enter number","number");
                            if(input != null){
                            var investment = parseFloat(input);
                            if(investment <= shrimp){
                                //shrimp = shrimp - investment;
                                addInvestmentToShrimp(-1*investment);
                                // function buyStock(input){
                                    let stockROI = ((Math.random()*100) -50 + 10)*.01;
                                    var shrimpReturn  = stockROI*investment;
                                    setTimeout(addInvestmentToShrimp, 10000, shrimpReturn);
                                // }
                            }
                            }
                        };
                        
                        function addInvestmentToShrimp(amount) {
                            
                            shrimp = shrimp + amount;
                            document.getElementById("shrimp").innerHTML = parseInt(shrimp);
                        }


                        function addToShrimp(amount) {
                            (planktonUpgrades == 0 && netUpgrades == 0 && mineralUpgrades == 0) ? shrimp = shrimp + amount :shrimp = shrimp + amount*(planktonUpgrades*1.05 + netUpgrades*1.1 + mineralUpgrades*1.25);
                            document.getElementById("shrimp").innerHTML = parseInt(shrimp);

                            if (shrimp >= 10 && ach1 == 0){
                                alert("Achievement unlocked: Shrimp Sampler\nAccumulated 10 shrimp\n\nDid you know that the Axolotl is classified as a critically endangered species? In fact, it is almost extinct due to invasive species being introduced into its habitat, as well as habitat loss.");
                                ach1 = 1;
                            }

                            if (shrimp >= 500 && ach2 == 0){
                                alert("Achievement unlocked: Shrimp Savant\nAccumulated 500 shrimp\n\nDid you know that the Axolotl is also over 1,000 times more resistant to cancer than mammals? Scientists hope that we can one day harness the axolotls natural resistance to eliminate cancer and extend our lifespans.");
                                ach2 = 1;
                            }

                            if (shrimp >= 5000 && ach3 == 0){
                                alert("Achievement unlocked: Shrimp Connoisseur\nAccumulated 5000 shrimp\n\nDid you know that Axolotl are only be found in Mexico? Their natural habitat is Lake Xochimilco, an ancient network of lakes and canals in southern Mexico City. Although they also survive in aquariums, water tanks and research labs around the world.");
                                ach3 = 1;
                            }

                            if (shrimp >= 100000 && ach4 == 0){
                                alert("Achievement unlocked: Shrimptator\nAccumulated 100000 shrimp\n\nDid you know that Axolotl are only be found in Mexico? Their natural habitat is Lake Xochimilco, an ancient network of lakes and canals in southern Mexico City. Although they also survive in aquariums, water tanks and research labs around the world.");
                                ach4 = 1;
                            }

                            if ((netUpgrades||mineralUpgrades||planktonUpgrades) >= 1 && ach5 == 0){
                                alert("Achievement unlocked: Movin' on up\nAcquired your first upgrade\n\nDid you know that Axolotl does not chew its food? They feed by using suction. They do this by using rakers that interlock and close the gill slits as food is sucked into the mouth. They are carnivorous, and eat worms, tadpoles, insects and even small fish.");
                                ach5 = 1;
                            }

                            if ((netUpgrades||mineralUpgrades||planktonUpgrades) >= 10 && ach6 == 0){
                                alert("Achievement unlocked: Big Fish, Small Fry\nAcquired 10 upgrades\n\nDid you know that although critically endangered, the Axolotl has very few predators? In the wild, the Axolotl is pretty much on its own, although it does have a couple of other aquatic competitors that consider the Mexican Walking Fish as part of their food chain. The Carp and Tilapia happen to enjoy the taste of Axolotl.");
                                ach6 = 1;
                            }

                            if ((netUpgrades||mineralUpgrades||planktonUpgrades) >= 100 && ach7 == 0){
                                alert("Achievement unlocked: Shrimptastic!\nAcquired 100 upgrades\n\nDid you know that the word Axolotl comes from the Ancient Aztecs who revered them? It translates to mean water dog.");
                                ach7 = 1;
                            }

                            if ((mineralUpgrades) >= 1 && ach8 == 0){
                                alert("Achievement unlocked: Calci-licious!!!\nAcquired your first mineral bed upgrade\n\nDid you know that the Axolotl breeding ritual involves a dance?");
                                ach8 = 1;
                            }
                        }

                        function buyNet() {
                            if (shrimp >= netCost){
                                shrimp = shrimp - netCost;
                                netUpgrades++;
                                netCost = Math.round(netCost * 1.15);

                                document.getElementById("shrimp").innerHTML = parseInt(shrimp);
                                document.getElementById("netCost").innerHTML = netCost;
                                document.getElementById("netUpgrades").innerHTML = netUpgrades;

                            }
                        }

                        function buyPlankton() {
                            if (shrimp >= planktonCost){
                                shrimp = shrimp - planktonCost;
                                planktonUpgrades++;
                                planktonCost = Math.round(planktonCost * 1.05);

                                document.getElementById("shrimp").innerHTML = parseInt(shrimp);
                                document.getElementById("planktonCost").innerHTML = planktonCost;
                                document.getElementById("planktonUpgrades").innerHTML = planktonUpgrades;

                            }
                        }

                        function buyMineral() {
                            if (shrimp >= mineralCost){
                                shrimp = shrimp - mineralCost;
                                mineralUpgrades++;
                                mineralCost = Math.round(mineralCost * 1.5);

                                document.getElementById("shrimp").innerHTML = parseInt(shrimp);
                                document.getElementById("mineralCost").innerHTML = mineralCost;
                                document.getElementById("mineralUpgrades").innerHTML = mineralUpgrades;

                            }
                        }
                        
                        
