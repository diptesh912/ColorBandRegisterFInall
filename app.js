var app= angular.module("app", []);

app.controller("myCtrl", function($scope){
	
	$scope.colors=["Brown" ,"red","Orange","yellow","Green","Blue","Violet","Gray","White"];
	$scope.Pricolors=["Brown" ,"red","Silver","Gold"];
	
	$scope.$watch("color1" ,
            function handleColor1Change( newValue, oldValue ) {               
                $scope.default1=newValue; 
              switch(newValue){
                case "brown": $scope.c1=1; break;
                case "red": $scope.c1=2; break;
                case "Orange": $scope.c1=3; break;
                case "yellow": $scope.c1=4; break;
                case "Green": $scope.c1=5; break;
                case "Blue": $scope.c1=6; break;
                case "Violet": $scope.c1=7; break;
                case "Gray": $scope.c1=8; break;
                case "White": $scope.c1=9; break;
                
                }
            }
        );
	
	
	$scope.$watch("color2" ,
            function handleColor4Change( newValue, oldValue ) {               
                $scope.default2=newValue; 
                switch(newValue){
                case "brown": $scope.c2=1; break;
                case "red": $scope.c2=2; break;
                case "Orange": $scope.c2=3; break;
                case "yellow": $scope.c2=4; break;
                case "Green": $scope.c2=5; break;
                case "Blue": $scope.c2=6; break;
                case "Violet": $scope.c2=7; break;
                case "Gray": $scope.c2=8; break;
                case "White": $scope.c2=9; break;
                
                }
            }
        );
	
	$scope.$watch("color3" ,
            function handleColor4Change( newValue, oldValue ) {               
                $scope.default3=newValue; 
                
                switch(newValue){
                case "brown": $scope.c3=1; break;
                case "red": $scope.c3=2; break;
                case "Orange": $scope.c3=3; break;
                case "yellow": $scope.c3=4; break;
                case "Green": $scope.c3=5; break;
                case "Blue": $scope.c3=6; break;
                case "Violet": $scope.c3=7; break;
                case "Gray": $scope.c3=8; break;
                case "White": $scope.c3=9; break;
                
                }
            }
        );
	
	$scope.$watch("color4" ,
            function handleColor4Change( newValue, oldValue ) {               
                $scope.Pricision=newValue; 
                switch(newValue){
                case "brown": $scope.m="1%"; break;
                case "red": $scope.m="2%"; break;
                case "Siver": $scope.m="5%"; break;
                case "Gold": $scope.m="10%"; break;
               
                
                }
            }
        );
	
	$scope.calculate= function(){
	
		$scope.res = (((10 *$scope.c1) + (1 * $scope.c2)) * (Math.pow(10 ,$scope.c3)));
	  

	  if ($scope.res >= 1e6) {
		  $scope.res /= 1e6;
		  $scope.res += "M Ohms"
	  } else 
	    if ($scope.res >= 1e3) {
	    	$scope.res /= 1e3;
	    	$scope.res += "k Ohms"
	    } else $scope.res += " Ohms";
	 $scope.res += " " + $scope.m;
	}
	
	
});