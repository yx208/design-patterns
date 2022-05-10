
class MobilePhoneFactory {
    createOS() {
        throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！");
    }
    createHardware() {
        throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！");
    }
}

class OS {
    controlHardware() {
        throw new Error('抽象产品方法不允许直接调用，你需要将我重写！');
    }
}

class Hardware {
    operateByOrder() {
        throw new Error('抽象产品方法不允许直接调用，你需要将我重写！');
    }
}

class AndroidOS extends OS {
    controlHardware() {
        console.log('我会用安卓的方式去操作硬件')
    }
}

class AppleOS extends OS {
    controlHardware() {
        console.log('我会用🍎的方式去操作硬件')
    }
}

class QualcommHardware extends Hardware {
    operateByOrder() {
        console.log('我会用高通的方式去运转')
    }
}

class MiHardware extends Hardware {
    operateByOrder() {
        console.log('我会用小米的方式去运转')
    }
}

class AppleHardware extends Hardware {
    operateByOrder() {
        console.log('我会用🍎的方式去运转')
    }
}

class FakeStarFactory extends MobilePhoneFactory {
    /**
     * @return {OS}
     */
    createOS() {
        return new AndroidOS();
    }
    /**
     * @return {Hardware}
     */
    createHardware() {
        return new QualcommHardware();
    }
}

const myPhone = new FakeStarFactory();
const myOS = myPhone.createOS();
const myHardware = myPhone.createHardware();

myOS.controlHardware();
myHardware.operateByOrder();
