

export default class Helper {

    static resTest(res = false) {

        if (!res) return 'Test';
        
        res.status(200).send({
            message: 'Response Test',
        });
    }

}