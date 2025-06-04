// 用于创建对象，封装对象的创建过程，提供一个统一的接口来获取对象。
class ShapeFactory {

    createShape(type) {
        switch (type) {
            case 'circle':
                return new Circle();
            case 'rectangle':
                return new Rectangle();
            case 'square':
                return new Square();
            default:
                return null;
        }
    }
}

// 不同产品
class Circle {
    draw() {
        console.log('画一个圆形');
    }
}

class Rectangle {
    draw() {
        console.log('画一个长方形');
    }
}

class Square {
    draw() {
        console.log('画一个正方形');
    }
}

// 使用工厂类创建对象
const factory = new ShapeFactory();
const circle = factory.createShape('circle');
const rectangle = factory.createShape('rectangle');
const square = factory.createShape('square');

circle.draw(); // 输出：画一个圆形
rectangle.draw(); // 输出：画一个长方形
square.draw(); // 输出：画一个正方形
