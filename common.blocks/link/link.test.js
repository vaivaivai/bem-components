modules.define(
    'test',
    ['i-bem__dom', 'jquery', 'BEMHTML', 'sinon'],
    function(provide, DOM, $, BEMHTML, sinon) {

describe('link', function() {
    var link;

    beforeEach(function() {
        link = DOM.init(
                $(BEMHTML.apply({
                    block : 'link',
                    js : true
                })))
            .appendTo('body')
            .bem('link');
    });

    afterEach(function() {
        DOM.destruct(link.domElem);
    });

    it('should emit "click" event', function() {
        var spy = sinon.spy();

        link.on('click', spy);
        link.domElem.trigger('pointerclick');

        spy.should.have.been.calledOnce;
    });

    it('should not emit "click" event if disabled', function() {
        var spy = sinon.spy();

        link.setMod('disabled');
        link.on('click', spy);
        link.domElem.trigger('pointerclick');

        spy.should.not.have.been.called;
    });
});

provide();

});