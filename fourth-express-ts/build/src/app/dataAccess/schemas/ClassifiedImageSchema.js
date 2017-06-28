"use strict";
const DataAccess = require("./../../dataAccess/DataAccess");
const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;
// NOTE!! I have not tested requiring nested fields. As it stands the image and
// predition fields are allowed to be empty...
class ClassifiedImageSchema {
    static get schema() {
        const schema = mongoose.Schema({
            image_name: {
                type: String,
                required: true
            },
            image_path: {
                type: String,
                required: true,
            },
            date_uploaded: {
                type: Date,
                required: true
            },
            img: {
                data: {
                    type: Buffer,
                    required: true
                },
                content_type: {
                    type: String,
                    required: true
                }
            },
            predictions: [
                {
                    date: Number,
                    model_version: String,
                    values_by_class: [
                        { class_name: String, probability: Number }
                    ]
                }
            ]
        });
        return schema;
    }
}
const schema = mongooseConnection.model('Classified Images', ClassifiedImageSchema.schema);
module.exports = schema;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YUFjY2Vzcy9zY2hlbWFzL0NsYXNzaWZpZWRJbWFnZVNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNERBQTZEO0FBRzdELE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztBQUM3QyxNQUFNLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV6RCwrRUFBK0U7QUFDL0UsOENBQThDO0FBRTlDO0lBRUUsTUFBTSxLQUFLLE1BQU07UUFDZixNQUFNLE1BQU0sR0FBSSxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQzlCLFVBQVUsRUFBRTtnQkFDVixJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsSUFBSTthQUNmO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFDRCxhQUFhLEVBQUU7Z0JBQ2IsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsUUFBUSxFQUFFLElBQUk7YUFDZjtZQUNELEdBQUcsRUFBRTtnQkFDSCxJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLElBQUk7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxJQUFJO2lCQUNmO2FBQ0Y7WUFDRCxXQUFXLEVBQUU7Z0JBQ1g7b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osYUFBYSxFQUFFLE1BQU07b0JBQ3JCLGVBQWUsRUFBRTt3QkFDZixFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBQztxQkFDMUM7aUJBQ0Y7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUVGO0FBQ0QsTUFBTSxNQUFNLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUF3QixtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNsSCxpQkFBUyxNQUFNLENBQUMiLCJmaWxlIjoic3JjL2FwcC9kYXRhQWNjZXNzL3NjaGVtYXMvQ2xhc3NpZmllZEltYWdlU2NoZW1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFBY2Nlc3MgPSByZXF1aXJlKCcuLy4uLy4uL2RhdGFBY2Nlc3MvRGF0YUFjY2VzcycpO1xuaW1wb3J0IElDbGFzc2lmaWVkSW1hZ2VNb2RlbCA9IHJlcXVpcmUoJy4vLi4vLi4vbW9kZWwvaW50ZXJmYWNlcy9DbGFzc2lmaWVkSW1hZ2VNb2RlbCcpO1xuXG5jb25zdCBtb25nb29zZSA9IERhdGFBY2Nlc3MubW9uZ29vc2VJbnN0YW5jZTtcbmNvbnN0IG1vbmdvb3NlQ29ubmVjdGlvbiA9IERhdGFBY2Nlc3MubW9uZ29vc2VDb25uZWN0aW9uO1xuXG4vLyBOT1RFISEgSSBoYXZlIG5vdCB0ZXN0ZWQgcmVxdWlyaW5nIG5lc3RlZCBmaWVsZHMuIEFzIGl0IHN0YW5kcyB0aGUgaW1hZ2UgYW5kXG4vLyBwcmVkaXRpb24gZmllbGRzIGFyZSBhbGxvd2VkIHRvIGJlIGVtcHR5Li4uXG5cbmNsYXNzIENsYXNzaWZpZWRJbWFnZVNjaGVtYSB7XG5cbiAgc3RhdGljIGdldCBzY2hlbWEgKCkge1xuICAgIGNvbnN0IHNjaGVtYSA9ICBtb25nb29zZS5TY2hlbWEoe1xuICAgICAgaW1hZ2VfbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICB9LFxuICAgICAgaW1hZ2VfcGF0aDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGRhdGVfdXBsb2FkZWQ6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBpbWc6IHsgLy8gbWlnaHQgcmVxdWlyZSB0byBiZSBhbiBvYmplY3QgZm9yIG5lc3RlZCBpdGVtc1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdHlwZTogQnVmZmVyLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnRfdHlwZToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJlZGljdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGRhdGU6IE51bWJlcixcbiAgICAgICAgICBtb2RlbF92ZXJzaW9uOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWVzX2J5X2NsYXNzOiBbXG4gICAgICAgICAgICB7Y2xhc3NfbmFtZTogU3RyaW5nLCBwcm9iYWJpbGl0eTogTnVtYmVyfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNjaGVtYTtcbiAgfVxuXG59XG5jb25zdCBzY2hlbWEgPSBtb25nb29zZUNvbm5lY3Rpb24ubW9kZWw8SUNsYXNzaWZpZWRJbWFnZU1vZGVsPignQ2xhc3NpZmllZCBJbWFnZXMnLCBDbGFzc2lmaWVkSW1hZ2VTY2hlbWEuc2NoZW1hKTtcbmV4cG9ydCA9IHNjaGVtYTtcbiJdfQ==
