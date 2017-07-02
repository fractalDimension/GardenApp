"use strict";
const ClassifiedImageBusiness = require("./../app/business/ClassifiedImageBusiness");
class ClassifiedImageController {
    create(req, res, next) {
        console.log('classify controller create'); // req.body);
        try {
            const classifiedImageBusiness = new ClassifiedImageBusiness();
            classifiedImageBusiness.create(req, (error, result) => {
                if (error) {
                    console.log('error in image db add');
                    res.send({ 'error': 'error' });
                }
                else {
                    console.log('save success');
                    // store the saved doc id in the response for the next middleware to use
                    res.locals._id = result._id;
                    next();
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ 'error': 'error in your request' });
        }
    }
    classify(req, res) {
        console.log('controller classify');
        try {
            const classifiedImageBusiness = new ClassifiedImageBusiness();
            classifiedImageBusiness.classify(res, (error, result) => {
                if (error) {
                    console.log('error in image classify');
                    res.send({ 'error': 'error' });
                }
                else {
                    console.log('classify success!!');
                    res.send({ 'success': 'success' });
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ 'error': 'error in your request' });
        }
    }
    update(req, res) {
        try {
            const classifiedImage = req.body;
            const _id = req.params._id;
            const classifiedImageBusiness = new ClassifiedImageBusiness();
            classifiedImageBusiness.update(_id, classifiedImage, (error, result) => {
                if (error) {
                    res.send({ 'error': 'error' });
                }
                else {
                    res.send({ 'success': 'success' });
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ 'error': 'error in your request' });
        }
    }
    delete(req, res) {
        try {
            const _id = req.params._id;
            const classifiedImageBusiness = new ClassifiedImageBusiness();
            classifiedImageBusiness.delete(_id, (error, result) => {
                if (error) {
                    res.send({ 'error': 'error' });
                }
                else {
                    res.send({ 'success': 'success' });
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ 'error': 'error in your request' });
        }
    }
    retrieve(req, res) {
        try {
            const classifiedImageBusiness = new ClassifiedImageBusiness();
            classifiedImageBusiness.retrieve((error, result) => {
                if (error) {
                    res.send({ 'error': 'error' });
                }
                else {
                    res.send(result);
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ 'error': 'error in your request' });
        }
    }
    findById(req, res) {
        try {
            const _id = req.params._id;
            const classifiedImageBusiness = new ClassifiedImageBusiness();
            classifiedImageBusiness.findById(_id, (error, result) => {
                if (error) {
                    res.send({ 'error': 'error' });
                }
                else {
                    res.send(result);
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ 'error': 'error in your request' });
        }
    }
    findImageFileById(req, res) {
        try {
            const _id = req.params._id;
            const classifiedImageBusiness = new ClassifiedImageBusiness();
            classifiedImageBusiness.findById(_id, (error, result) => {
                if (error) {
                    res.send({ 'error': 'error' });
                }
                else {
                    res.set('Content-Type', result.img.content_type);
                    res.send(result.img.data);
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ 'error': 'error in your request' });
        }
    }
}
module.exports = ClassifiedImageController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250cm9sbGVycy9DbGFzc2lmaWVkSW1hZ2VDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxxRkFBc0Y7QUFNdEY7SUFFRSxNQUFNLENBQUMsR0FBK0MsRUFBRSxHQUFxQixFQUFFLElBQVM7UUFDdEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsYUFBYTtRQUN4RCxJQUFJLENBQUM7WUFFSCxNQUFNLHVCQUF1QixHQUFHLElBQUksdUJBQXVCLEVBQUUsQ0FBQztZQUU5RCx1QkFBdUIsQ0FBQyxNQUFNLENBQUUsR0FBRyxFQUFFLENBQUMsS0FBVSxFQUFFLE1BQVc7Z0JBQzNELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO29CQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDNUIsd0VBQXdFO29CQUN4RSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUM1QixJQUFJLEVBQUUsQ0FBQztnQkFDVCxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFTCxDQUFDO1FBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLHVCQUF1QixFQUFDLENBQUMsQ0FBQztRQUUvQyxDQUFDO0lBQ0gsQ0FBQztJQUNELFFBQVEsQ0FBQyxHQUErQyxFQUFFLEdBQXFCO1FBQzdFLE9BQU8sQ0FBQyxHQUFHLENB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SUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLHVCQUF1QixFQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDO0lBQ0gsQ0FBQztDQUVGO0FBQ0QsaUJBQVMseUJBQXlCLENBQUMiLCJmaWxlIjoic3JjL2NvbnRyb2xsZXJzL0NsYXNzaWZpZWRJbWFnZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmltcG9ydCBDbGFzc2lmaWVkSW1hZ2VCdXNpbmVzcyA9IHJlcXVpcmUoJy4vLi4vYXBwL2J1c2luZXNzL0NsYXNzaWZpZWRJbWFnZUJ1c2luZXNzJyk7XG5pbXBvcnQgSUJhc2VDb250cm9sbGVyID0gcmVxdWlyZSgnLi9pbnRlcmZhY2VzL2Jhc2UvQmFzZUNvbnRyb2xsZXInKTtcbmltcG9ydCBJQ2xhc3NpZmllZEltYWdlTW9kZWwgPSByZXF1aXJlKCcuLy4uL2FwcC9tb2RlbC9pbnRlcmZhY2VzL0NsYXNzaWZpZWRJbWFnZU1vZGVsJyk7XG5pbXBvcnQgSU11bHRlckZpbGVNb2RlbCA9IHJlcXVpcmUoJy4vLi4vYXBwL21vZGVsL2ludGVyZmFjZXMvTXVsdGVyRmlsZU1vZGVsJyk7XG5cblxuY2xhc3MgQ2xhc3NpZmllZEltYWdlQ29udHJvbGxlciBpbXBsZW1lbnRzIElCYXNlQ29udHJvbGxlciA8Q2xhc3NpZmllZEltYWdlQnVzaW5lc3M+IHtcblxuICBjcmVhdGUocmVxOiBleHByZXNzLlJlcXVlc3QgJiB7ZmlsZTogSU11bHRlckZpbGVNb2RlbH0sIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogYW55KTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ2NsYXNzaWZ5IGNvbnRyb2xsZXIgY3JlYXRlJyk7IC8vIHJlcS5ib2R5KTtcbiAgICB0cnkge1xuXG4gICAgICBjb25zdCBjbGFzc2lmaWVkSW1hZ2VCdXNpbmVzcyA9IG5ldyBDbGFzc2lmaWVkSW1hZ2VCdXNpbmVzcygpO1xuXG4gICAgICBjbGFzc2lmaWVkSW1hZ2VCdXNpbmVzcy5jcmVhdGUoIHJlcSwgKGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiBpbWFnZSBkYiBhZGQnKTtcbiAgICAgICAgICByZXMuc2VuZCh7J2Vycm9yJzogJ2Vycm9yJ30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlIHN1Y2Nlc3MnKTtcbiAgICAgICAgICAvLyBzdG9yZSB0aGUgc2F2ZWQgZG9jIGlkIGluIHRoZSByZXNwb25zZSBmb3IgdGhlIG5leHQgbWlkZGxld2FyZSB0byB1c2VcbiAgICAgICAgICByZXMubG9jYWxzLl9pZCA9IHJlc3VsdC5faWQ7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIH0gY2F0Y2ggKGUpICB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHJlcy5zZW5kKHsnZXJyb3InOiAnZXJyb3IgaW4geW91ciByZXF1ZXN0J30pO1xuXG4gICAgfVxuICB9XG4gIGNsYXNzaWZ5KHJlcTogZXhwcmVzcy5SZXF1ZXN0ICYge2ZpbGU6IElNdWx0ZXJGaWxlTW9kZWx9LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnY29udHJvbGxlciBjbGFzc2lmeScpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjbGFzc2lmaWVkSW1hZ2VCdXNpbmVzcyA9IG5ldyBDbGFzc2lmaWVkSW1hZ2VCdXNpbmVzcygpO1xuXG4gICAgICBjbGFzc2lmaWVkSW1hZ2VCdXNpbmVzcy5jbGFzc2lmeSggcmVzLCAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGluIGltYWdlIGNsYXNzaWZ5Jyk7XG4gICAgICAgICAgcmVzLnNlbmQoeydlcnJvcic6ICdlcnJvcid9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2xhc3NpZnkgc3VjY2VzcyEhJyk7XG4gICAgICAgICAgcmVzLnNlbmQoeydzdWNjZXNzJzogJ3N1Y2Nlc3MnfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpICB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHJlcy5zZW5kKHsnZXJyb3InOiAnZXJyb3IgaW4geW91ciByZXF1ZXN0J30pO1xuICAgIH1cblxuICB9XG5cbiAgdXBkYXRlKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2xhc3NpZmllZEltYWdlOiBJQ2xhc3NpZmllZEltYWdlTW9kZWwgPSA8SUNsYXNzaWZpZWRJbWFnZU1vZGVsPnJlcS5ib2R5O1xuICAgICAgY29uc3QgX2lkOiBzdHJpbmcgPSByZXEucGFyYW1zLl9pZDtcbiAgICAgIGNvbnN0IGNsYXNzaWZpZWRJbWFnZUJ1c2luZXNzID0gbmV3IENsYXNzaWZpZWRJbWFnZUJ1c2luZXNzKCk7XG4gICAgICBjbGFzc2lmaWVkSW1hZ2VCdXNpbmVzcy51cGRhdGUoX2lkLCBjbGFzc2lmaWVkSW1hZ2UsIChlcnJvcjogYW55LCByZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXMuc2VuZCh7J2Vycm9yJzogJ2Vycm9yJ30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcy5zZW5kKHsnc3VjY2Vzcyc6ICdzdWNjZXNzJ30pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSAge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICByZXMuc2VuZCh7J2Vycm9yJzogJ2Vycm9yIGluIHlvdXIgcmVxdWVzdCd9KTtcbiAgICB9XG4gIH1cbiAgZGVsZXRlKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgX2lkOiBzdHJpbmcgPSByZXEucGFyYW1zLl9pZDtcbiAgICAgIGNvbnN0IGNsYXNzaWZpZWRJbWFnZUJ1c2luZXNzID0gbmV3IENsYXNzaWZpZWRJbWFnZUJ1c2luZXNzKCk7XG4gICAgICBjbGFzc2lmaWVkSW1hZ2VCdXNpbmVzcy5kZWxldGUoX2lkLCAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmVzLnNlbmQoeydlcnJvcic6ICdlcnJvcid9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMuc2VuZCh7J3N1Y2Nlc3MnOiAnc3VjY2Vzcyd9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkgIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgcmVzLnNlbmQoeydlcnJvcic6ICdlcnJvciBpbiB5b3VyIHJlcXVlc3QnfSk7XG4gICAgfVxuICB9XG4gIHJldHJpZXZlKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2xhc3NpZmllZEltYWdlQnVzaW5lc3MgPSBuZXcgQ2xhc3NpZmllZEltYWdlQnVzaW5lc3MoKTtcbiAgICAgIGNsYXNzaWZpZWRJbWFnZUJ1c2luZXNzLnJldHJpZXZlKChlcnJvcjogYW55LCByZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXMuc2VuZCh7J2Vycm9yJzogJ2Vycm9yJ30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcy5zZW5kKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpICB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHJlcy5zZW5kKHsnZXJyb3InOiAnZXJyb3IgaW4geW91ciByZXF1ZXN0J30pO1xuICAgIH1cbiAgfVxuICBmaW5kQnlJZChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IF9pZDogc3RyaW5nID0gcmVxLnBhcmFtcy5faWQ7XG4gICAgICBjb25zdCBjbGFzc2lmaWVkSW1hZ2VCdXNpbmVzcyA9IG5ldyBDbGFzc2lmaWVkSW1hZ2VCdXNpbmVzcygpO1xuICAgICAgY2xhc3NpZmllZEltYWdlQnVzaW5lc3MuZmluZEJ5SWQoX2lkLCAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmVzLnNlbmQoeydlcnJvcic6ICdlcnJvcid9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMuc2VuZChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSAge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICByZXMuc2VuZCh7J2Vycm9yJzogJ2Vycm9yIGluIHlvdXIgcmVxdWVzdCd9KTtcbiAgICB9XG4gIH1cbiAgZmluZEltYWdlRmlsZUJ5SWQocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBfaWQ6IHN0cmluZyA9IHJlcS5wYXJhbXMuX2lkO1xuICAgICAgY29uc3QgY2xhc3NpZmllZEltYWdlQnVzaW5lc3MgPSBuZXcgQ2xhc3NpZmllZEltYWdlQnVzaW5lc3MoKTtcbiAgICAgIGNsYXNzaWZpZWRJbWFnZUJ1c2luZXNzLmZpbmRCeUlkKF9pZCwgKGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJlcy5zZW5kKHsnZXJyb3InOiAnZXJyb3InfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzLnNldCggJ0NvbnRlbnQtVHlwZScsIHJlc3VsdC5pbWcuY29udGVudF90eXBlICk7XG4gICAgICAgICAgcmVzLnNlbmQoIHJlc3VsdC5pbWcuZGF0YSApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSAge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICByZXMuc2VuZCh7J2Vycm9yJzogJ2Vycm9yIGluIHlvdXIgcmVxdWVzdCd9KTtcbiAgICB9XG4gIH1cblxufVxuZXhwb3J0ID0gQ2xhc3NpZmllZEltYWdlQ29udHJvbGxlcjtcbiJdfQ==
