
//Create board and players: 
let board = [0, 1, 2, 3, 4, 5 ,6 ,7 ,8]; // 0-8 represent squares on the game board. 

 let player1 = 'X'; // Player X (AI) makes the first move. 

 let player2 = 'O'; // Player O (human) is second to move. 

 const WINNING_COMBOS = [[0, 1, 2], [3, 4, 5], [6, 7 ,8], [0 ,3 ,6], [1 ,4 ,7], [2 ,5 8],[0 4 8],[2 4 6]]; // All possible winning combinations of squares in tic tac toe.  

 const AI_PLAYER = player1; // The AI will be playing as Player X ('X').
  				  
/**  Minimax Algorithm **/       	   

 function minimax(boardState){    /* Minimax Algorithm */          /* Function takes current state of tic tac toe board as argument */           /* Returns best possible move for given board state */            let availableSquares= getAvailableSquares(boardState);     /* Get list of available empty squares on the game board */             if(checkWin(boardState)){       return {score:-10};     } else if (checkDraw(boardState)){      return {score: 0};    }            let moves=[];      for (let i=0; i<availableSquares.length;i++){          let possibleMove={};              possibleMove['index']=board[availableSquares[i]];               /* Get index of each avaiable square*/                                /* Create an object for each and store index of that square*/                                    /** Simulate a move before making it**/             Boardstate[availableSquares[i]]=AI_PLAYER ;                  /** Recursive call - send new simulated state into minimax call**/                     resultsOfSimulatedMoves++;           movesResultsForAIMove+=minimax(newBoard).score;        Boardstate[availableSquare]=null ;       delete previous simulated Move                                           /** Push every simulated result into an array**/                   movesPossibleForAIMove .push({index :possibleMove ['index' ], score :movesResultsForAIMove});         }                       /** Select Best Move from Array **/              var bestMove=-1000 ;        var bestIndex=-1000 ;                       for (var i= 0; i<movesPossibleForAIMove .length;i++){                if(bestmove <movesResultFromSimulatedMoves[i].score ){                    bestmove=movesResultFromSimulatedMoves[i].score ;                         BestIndex = Moves POSSIBLE FOR AImOVES[[I]] INDEX                      }}            return {indesx:bestIndex Score:bestScore}                        };