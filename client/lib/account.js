import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

if (Meteor.isClient) {
    //회원가입
    Template.register.events({
        'click .register-btn': function(event) {
            event.preventDefault();
            var emailVar = $('[name=registerEmail]').val();
            var passwordVar = $('[name=registerPassword]').val();
            Accounts.createUser({
                email: emailVar,
                password: passwordVar
            },function(err){
                if(err){
                    Bert.alert( err.reason, 'danger', 'growl-top-right', 'fa-frown-o' );
                }
                else{
                    Bert.alert( '회원가입이 성공적으로 완료되었습니다.', 'success', 'growl-top-right', 'fa-smile-o' );
                    FlowRouter.go('/');
                }
            });
        }
    });

    //로그인
    Template.login.events({
        'submit form': function(event) {
            event.preventDefault();
            var emailVar = $('[name=loginEmail]').val();
            var passwordVar = $('[name=loginPassword]').val();
            Meteor.loginWithPassword({email:emailVar}, passwordVar, function(err){
                if(err){
                    Bert.alert( err.reason, 'danger', 'growl-top-right', 'fa-frown-o' );
                }
                else{
                    Bert.alert( '환영합니다. '+emailVar+'님.', 'success', 'growl-top-right', 'fa-smile-o' );
                    FlowRouter.go('/');
                }
            });
        },
        'click .toRegister': function(event) {
            event.preventDefault();
            FlowRouter.go('/register');
        },
        'click .toFindIdPw': function(event) {
            event.preventDefault();
            FlowRouter.go('/findIdPw');
        }
    });

    //로그아웃
    Template.mainTopBar.events({
    'click .logout': function(event){
            event.preventDefault();
            Meteor.logout();
            Bert.alert( '성공적으로 로그아웃되었습니다.', 'success', 'growl-top-right', 'fa-smile-o' );
            FlowRouter.go('/');
        }
    });

    Template.findID.events({
    'click .findID-modal-submit': function(event){
            event.preventDefault();
            $(".findID-modal").hide();
        },
    'click .findID-modal-close': function(event){
            event.preventDefault();
            $(".findID-modal").hide();
        }
    });
}
