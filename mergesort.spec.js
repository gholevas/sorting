describe('Merge Sort', function(){
	it('is able to merge two sorted arrays of same length', function(){
        // test the merging algorithm
        expect( mergeSort([1,2,3,4], [5,7,8,12]) ).toEqual( [1,2,3,4,5,6,7,8,10,12] );
      //  console.log(halfArray([1,2]));
  		
    });
    // it('is able to merge two sorted arrays of different lengths', function(){
    //     // test the merging algorithm
    //     expect( mergeSort([1,2,3,4,6], [5,7,8]) ).toEqual( [1,2,3,4,5,6,7,8] );
    // });
});
