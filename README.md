# alertModal
a pop-up plugin by JavaScript

# install

## node

```
	npm install alertmodal

```

## browser

```
	<script src="alertModal.min.js"></script>
	
```

# usage

```
    window.alertModal({
        msg: "this is a test",
        status: 'fail'
    });

```

# API

	msg : alert message    				default : ''
	status : icon status ['fail'|'success'|'your custom icon class']  			default : success
	time : fadeout time  				default : 2000
	autoClose : if autoclose  			default : true
	delayTime : autoclose time			default : 2000
 