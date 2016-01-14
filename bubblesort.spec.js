describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles a single items', function(){
        expect( bubbleSort([3]) ).toEqual( [3] );
    });
    it('handles multiple items', function(){
        expect( bubbleSort([3,2,5,1,4]) ).toEqual( [1,2,3,4,5] );
    });
    it('handles already sorted array', function(){
        expect( bubbleSort([1,2,3,4,5]) ).toEqual( [1,2,3,4,5] );
    });
});


  // it("calls the function argument a maximum of two times", function(){
  //   var returnTen = jasmine.createSpy('returnTen', function(){
  //     return 10;
  //   });

  //   var returnVal = twice(returnTen);

  //   returnVal();
  //   returnVal();
  //   returnVal();

  //   expect(returnTen.calls.count()).toEqual(2);
  // });