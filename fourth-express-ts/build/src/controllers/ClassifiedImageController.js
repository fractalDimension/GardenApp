"use strict";
const ClassifiedImageBusiness = require("./../app/business/ClassifiedImageBusiness");
const multer = require('multer');
// multer settings for single upload
// TODO set max upload size
const upload = multer({
    dest: './tempUploads'
}).single('file');
class ClassifiedImageController {
    create(req, res) {
        console.log('this is the req.body'); // req.body);
        try {
            // const classifiedImage: IClassifiedImageModel = <IClassifiedImageModel>req.body;
            const classifiedImageBusiness = new ClassifiedImageBusiness();
            // use multer to upload
            upload(req, res, (uploadError) => {
                if (uploadError) {
                    console.log('multer error');
                }
                classifiedImageBusiness.create(req, (error, result) => {
                    if (error) {
                        console.log('error in image db add');
                        res.send({ 'error': 'error' });
                    }
                    else {
                        res.send({ 'success': 'success' });
                    }
                });
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
}
module.exports = ClassifiedImageController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250cm9sbGVycy9DbGFzc2lmaWVkSW1hZ2VDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxxRkFBc0Y7QUFLdEYsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpDLG9DQUFvQztBQUNwQywyQkFBMkI7QUFDM0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ2xCLElBQUksRUFBRyxlQUFlO0NBQ3pCLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFbEI7SUFFRSxNQUFNLENBQUMsR0FBK0MsRUFBRSxHQUFxQjtRQUMzRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxhQUFhO1FBQ2xELElBQUksQ0FBQztZQUNILGtGQUFrRjtZQUNsRixNQUFNLHVCQUF1QixHQUFHLElBQUksdUJBQXVCLEVBQUUsQ0FBQztZQUU5RCx1QkFBdUI7WUFDdkIsTUFBTSxDQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBRSxXQUFnQjtnQkFDbEMsRUFBRSxDQUFDLENBQUUsV0FBWSxDQUFDLENBQUMsQ0FBQztvQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFFOUIsQ0FBQztnQkFFRCx1QkFBdUIsQ0FBQyxNQUFNLENBQUUsR0FBRyxFQUFFLENBQUMsS0FBVSxFQUFFLE1BQVc7b0JBQzNELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO3dCQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7b0JBQy9CLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO29CQUNuQyxD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Q0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQztJQUNILENBQUM7SUFDRCxRQUFRLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUNsRCxJQUFJLENBQUM7WUFDSCxNQUFNLEdBQUcsR0FBVyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNuQyxNQUFNLHVCQUF1QixHQUFHLElBQUksdUJBQXVCLEVBQUUsQ0FBQztZQUM5RCx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBVSxFQUFFLE1BQVc7Z0JBQzVELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ1YsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25CLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUM7SUFDSCxDQUFDO0NBRUY7QUFDRCxpQkFBUyx5QkFBeUIsQ0FBQyIsImZpbGUiOiJzcmMvY29udHJvbGxlcnMvQ2xhc3NpZmllZEltYWdlQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuaW1wb3J0IENsYXNzaWZpZWRJbWFnZUJ1c2luZXNzID0gcmVxdWlyZSgnLi8uLi9hcHAvYnVzaW5lc3MvQ2xhc3NpZmllZEltYWdlQnVzaW5lc3MnKTtcbmltcG9ydCBJQmFzZUNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2ludGVyZmFjZXMvYmFzZS9CYXNlQ29udHJvbGxlcicpO1xuaW1wb3J0IElDbGFzc2lmaWVkSW1hZ2VNb2RlbCA9IHJlcXVpcmUoJy4vLi4vYXBwL21vZGVsL2ludGVyZmFjZXMvQ2xhc3NpZmllZEltYWdlTW9kZWwnKTtcbmltcG9ydCBJTXVsdGVyRmlsZU1vZGVsID0gcmVxdWlyZSgnLi8uLi9hcHAvbW9kZWwvaW50ZXJmYWNlcy9NdWx0ZXJGaWxlTW9kZWwnKTtcblxuY29uc3QgbXVsdGVyID0gcmVxdWlyZSgnbXVsdGVyJyk7XG5cbi8vIG11bHRlciBzZXR0aW5ncyBmb3Igc2luZ2xlIHVwbG9hZFxuLy8gVE9ETyBzZXQgbWF4IHVwbG9hZCBzaXplXG5jb25zdCB1cGxvYWQgPSBtdWx0ZXIoe1xuICAgIGRlc3QgOiAnLi90ZW1wVXBsb2Fkcydcbn0pLnNpbmdsZSgnZmlsZScpO1xuXG5jbGFzcyBDbGFzc2lmaWVkSW1hZ2VDb250cm9sbGVyIGltcGxlbWVudHMgSUJhc2VDb250cm9sbGVyIDxDbGFzc2lmaWVkSW1hZ2VCdXNpbmVzcz4ge1xuXG4gIGNyZWF0ZShyZXE6IGV4cHJlc3MuUmVxdWVzdCAmIHtmaWxlOiBJTXVsdGVyRmlsZU1vZGVsfSwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ3RoaXMgaXMgdGhlIHJlcS5ib2R5Jyk7IC8vIHJlcS5ib2R5KTtcbiAgICB0cnkge1xuICAgICAgLy8gY29uc3QgY2xhc3NpZmllZEltYWdlOiBJQ2xhc3NpZmllZEltYWdlTW9kZWwgPSA8SUNsYXNzaWZpZWRJbWFnZU1vZGVsPnJlcS5ib2R5O1xuICAgICAgY29uc3QgY2xhc3NpZmllZEltYWdlQnVzaW5lc3MgPSBuZXcgQ2xhc3NpZmllZEltYWdlQnVzaW5lc3MoKTtcblxuICAgICAgLy8gdXNlIG11bHRlciB0byB1cGxvYWRcbiAgICAgIHVwbG9hZCggcmVxLCByZXMsICggdXBsb2FkRXJyb3I6IGFueSApID0+IHsgLy8gcmVzPyBoYW5kbGUgZXJyb3IgcHJvcGVybHkgYnkgdGhyb3dpbmc/XG4gICAgICAgIGlmICggdXBsb2FkRXJyb3IgKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ211bHRlciBlcnJvcicpO1xuICAgICAgICAgIC8vIHJldHVybiBoYW5kbGVDbGFzc2lmeUVycm9yKCByZXMsIHsgZXJyb3JfY29kZTogMSwgZXJyX2Rlc2M6IHVwbG9hZEVycm9yIH0gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsYXNzaWZpZWRJbWFnZUJ1c2luZXNzLmNyZWF0ZSggcmVxLCAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiBpbWFnZSBkYiBhZGQnKTtcbiAgICAgICAgICAgIHJlcy5zZW5kKHsnZXJyb3InOiAnZXJyb3InfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcy5zZW5kKHsnc3VjY2Vzcyc6ICdzdWNjZXNzJ30pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpICB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHJlcy5zZW5kKHsnZXJyb3InOiAnZXJyb3IgaW4geW91ciByZXF1ZXN0J30pO1xuXG4gICAgfVxuICB9XG4gIHVwZGF0ZShyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNsYXNzaWZpZWRJbWFnZTogSUNsYXNzaWZpZWRJbWFnZU1vZGVsID0gPElDbGFzc2lmaWVkSW1hZ2VNb2RlbD5yZXEuYm9keTtcbiAgICAgIGNvbnN0IF9pZDogc3RyaW5nID0gcmVxLnBhcmFtcy5faWQ7XG4gICAgICBjb25zdCBjbGFzc2lmaWVkSW1hZ2VCdXNpbmVzcyA9IG5ldyBDbGFzc2lmaWVkSW1hZ2VCdXNpbmVzcygpO1xuICAgICAgY2xhc3NpZmllZEltYWdlQnVzaW5lc3MudXBkYXRlKF9pZCwgY2xhc3NpZmllZEltYWdlLCAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmVzLnNlbmQoeydlcnJvcic6ICdlcnJvcid9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMuc2VuZCh7J3N1Y2Nlc3MnOiAnc3VjY2Vzcyd9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkgIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgcmVzLnNlbmQoeydlcnJvcic6ICdlcnJvciBpbiB5b3VyIHJlcXVlc3QnfSk7XG4gICAgfVxuICB9XG4gIGRlbGV0ZShyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IF9pZDogc3RyaW5nID0gcmVxLnBhcmFtcy5faWQ7XG4gICAgICBjb25zdCBjbGFzc2lmaWVkSW1hZ2VCdXNpbmVzcyA9IG5ldyBDbGFzc2lmaWVkSW1hZ2VCdXNpbmVzcygpO1xuICAgICAgY2xhc3NpZmllZEltYWdlQnVzaW5lc3MuZGVsZXRlKF9pZCwgKGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJlcy5zZW5kKHsnZXJyb3InOiAnZXJyb3InfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzLnNlbmQoeydzdWNjZXNzJzogJ3N1Y2Nlc3MnfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpICB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHJlcy5zZW5kKHsnZXJyb3InOiAnZXJyb3IgaW4geW91ciByZXF1ZXN0J30pO1xuICAgIH1cbiAgfVxuICByZXRyaWV2ZShyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNsYXNzaWZpZWRJbWFnZUJ1c2luZXNzID0gbmV3IENsYXNzaWZpZWRJbWFnZUJ1c2luZXNzKCk7XG4gICAgICBjbGFzc2lmaWVkSW1hZ2VCdXNpbmVzcy5yZXRyaWV2ZSgoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmVzLnNlbmQoeydlcnJvcic6ICdlcnJvcid9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMuc2VuZChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSAge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICByZXMuc2VuZCh7J2Vycm9yJzogJ2Vycm9yIGluIHlvdXIgcmVxdWVzdCd9KTtcbiAgICB9XG4gIH1cbiAgZmluZEJ5SWQocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBfaWQ6IHN0cmluZyA9IHJlcS5wYXJhbXMuX2lkO1xuICAgICAgY29uc3QgY2xhc3NpZmllZEltYWdlQnVzaW5lc3MgPSBuZXcgQ2xhc3NpZmllZEltYWdlQnVzaW5lc3MoKTtcbiAgICAgIGNsYXNzaWZpZWRJbWFnZUJ1c2luZXNzLmZpbmRCeUlkKF9pZCwgKGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJlcy5zZW5kKHsnZXJyb3InOiAnZXJyb3InfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzLnNlbmQocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkgIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgcmVzLnNlbmQoeydlcnJvcic6ICdlcnJvciBpbiB5b3VyIHJlcXVlc3QnfSk7XG4gICAgfVxuICB9XG5cbn1cbmV4cG9ydCA9IENsYXNzaWZpZWRJbWFnZUNvbnRyb2xsZXI7XG4iXX0=
