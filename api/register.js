import request from "@/utils/request";


export default {

	registerMember(formItem) {
		return request({
			url:'/educenter/member/register',
			method:'post',
			data:formItem
		})
	},

	loginMember(formItem){
		return request({
			url:'/educenter/member/login',
			method:'post',
			data:formItem
		})
	},

	getMemberInfo(){
		return request({
			url:'/educenter/member/getMemberInfo',
			method:'get'
		})
	}
}

